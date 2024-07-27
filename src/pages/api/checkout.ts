// Server rendered
export const prerender = false;

import type { APIRoute } from "astro";
import { generateLiqPaySignature, createResponse } from "@/lib/helpers";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { data } = await request.json();

    if (!data || typeof data !== "string") {
      return createResponse({
        message: "Please provide json string",
        success: false,
        status: 404,
      });
    }

    const privateKey = process.env.PRIVATE_LIQPAY_KEY;

    if (!privateKey) {
      return createResponse({
        message: "Please set liqpay private key as environmental variable",
        success: false,
        status: 500,
      });
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
      return createResponse({
        message: error.message,
        success: false,
        status: 500,
      });
    }
  }

  // Return overall error
  return createResponse({
    message: "An unexpected error occurred",
    success: false,
    status: 404,
  });
};
