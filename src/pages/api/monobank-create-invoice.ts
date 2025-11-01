export const prerender = false;

import type { APIRoute } from "astro";

import { createResponse } from "@/lib/helpers";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const PRIVATE_MONOBANK_TOKEN = process.env.PRIVATE_MONOBANK_TOKEN || "";

    if (!PRIVATE_MONOBANK_TOKEN) {
      return createResponse({
        message: "Please set Monobank token as environmental variable",
        success: false,
        status: 500,
      });
    }

    const response = await fetch(
      "https://api.monobank.ua/api/merchant/invoice/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Token": PRIVATE_MONOBANK_TOKEN,
        },
        body: JSON.stringify(data),
      }
    );

    // If request failed throw error
    if (!response.ok) {
      return createResponse({
        message: "There was a problem with Monobank API.",
        success: false,
        status: 500,
      });
    }

    // Get successfull result
    const result = await response.json();

    // Return success response
    return createResponse({
      message: result,
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error("Monobank invoice creation failed:", error);

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
