// Server rendered
export const prerender = false;

import type { APIRoute } from "astro";
import sanitizeHtml from "sanitize-html";

export const POST: APIRoute = async ({ request }) => {
  try {
    // Get data from client
    const body = await request.json();
    let { name, organization, message, source = "", email } = body;

    // Validate
    if (
      !name ||
      typeof name !== "string" ||
      !organization ||
      typeof organization !== "string" ||
      !message ||
      typeof message !== "string" ||
      typeof source !== "string" ||
      !email ||
      typeof email !== "string"
    ) {
      return new Response("Please provide all required data", {
        status: 404,
      });
    }

    // Sanitize values
    name = sanitizeHtml(name);
    organization = sanitizeHtml(organization);
    message = sanitizeHtml(message);
    source = sanitizeHtml(source);
    email = sanitizeHtml(email);

    // Get sendpulse request with data
    const sendpulseRequest = await fetch(
      "https://events.sendpulse.com/events/id/a5845b0419324023828b3577f1e43dff/8603131",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone: "000000000000",
          data: [
            {
              name,
              organisation: organization,
              topic: message,
              found_out_from: source,
            },
          ],
        }),
      }
    );

    // If request failed throw error
    if (!sendpulseRequest.ok) {
      throw new Error("There was a problem with the server sendpulseRequest.");
    }

    // Succesfull response
    const sendpulseResponse = await sendpulseRequest.json();

    // Return response
    return new Response(
      JSON.stringify({
        message: sendpulseResponse,
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
