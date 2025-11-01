export const prerender = false;

import type { APIRoute } from "astro";

import { createResponse } from "@/lib/helpers";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Log payment data to server logs
    console.log("[Monobank Webhook]", new Date().toISOString());
    console.log(JSON.stringify(data, null, 2));

    return createResponse({
      message: "Monobank Webhook received",
      success: true,
      status: 200,
    });
  } catch (error) {
    // Return error if API call failed
    if (error instanceof Error) {
      console.error("[Monobank Webhook error]");

      // Return 200 to avoid monobank retrying
      return createResponse({
        message: error.message,
        success: true,
        status: 200,
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
