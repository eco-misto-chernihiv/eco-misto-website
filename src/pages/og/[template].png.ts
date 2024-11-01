// Server rendered
export const prerender = false;

import satori from "satori";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

import { Resvg } from "@resvg/resvg-js";
import { templates } from "@/og-templates/templates";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  // Obtain dynamic segment
  const { template } = context.params;

  // Indicating a client that they are making wrong request
  if (!template) {
    return new Response("Must provide a template", { status: 400 });
  }

  const templateFn = templates[template];

  if (!templateFn) {
    return new Response("Template not found", { status: 404 });
  }

  const { searchParams } = new URL(context.request.url);

  // Convert entries to key:value object
  const data = Object.fromEntries(searchParams.entries());

  // Generating svg image from our template
  const svg = await satori(templateFn(data), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Ermilov Bold",
        data: await fs.readFile(
          path.join(process.cwd(), "src/og-templates/Ermilov-Bold.ttf")
        ),
        style: "normal",
      },
    ],
  });

  // const resvgInstance = new Resvg(svg, {
  //   // Fit image to a box that has a width 1200
  //   fitTo: {
  //     mode: "width",
  //     value: 1200,
  //   },
  // });

  // // Render image from instance
  // const image = await resvgInstance.render();

  // Return a file from a result of our endpoint
  // return new Response(image.asPng());

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
}
