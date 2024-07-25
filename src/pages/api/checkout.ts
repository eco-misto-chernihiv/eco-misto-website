// Server rendered
export const prerender = false;

import type { APIRoute } from "astro";
import { generateLiqPaySignature } from "@/lib/helpers";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { data } = await request.json();

    if (!data || typeof data !== "string") {
      return new Response("Please provide json string", {
        status: 404,
      });
    }

    const privateKey = import.meta.env.PRIVATE_LIQPAY_KEY;

    if (!privateKey) {
      return new Response(
        "Please set liqpay private key as environmental variable",
        {
          status: 500,
        }
      );
    }

    const signature = generateLiqPaySignature(data, privateKey);

    // Return success response with signature
    return new Response(
      JSON.stringify({
        data: signature,
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    // Return error if API call failed
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({
          message: error.message,
          sucess: false,
        }),
        {
          status: 500,
        }
      );
    }
  }

  // Return overall error
  return new Response(
    JSON.stringify({
      message: "Something went wrong",
      success: false,
    }),
    {
      status: 404,
    }
  );
};
