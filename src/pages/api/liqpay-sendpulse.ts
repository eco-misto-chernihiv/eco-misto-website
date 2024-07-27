// Server rendered
export const prerender = false;

import type { APIRoute } from "astro";
import {
  generateLiqPaySignature,
  decodeBase64,
  createResponse,
} from "@/lib/helpers";
import { format } from "date-fns";
import type {
  LiqPayPayload,
  LiqPayObject,
  LiqPayCustomData,
} from "@/lib/types";

const PAYMENT_STATUS = {
  SUCESS: "success",
  SUBSCRIBED: "subscribed",
};

const SENDPULSE_API_URL =
  process.env.SENDPULSE_API_URL || "https://events.sendpulse.com/events/id";

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log("Received LiqPay callback");

    const body = decodeURIComponent(await request.text())
      .split("&")
      .reduce((acc, curr) => {
        // Split each key-value pair at the first '=' sign
        // The regex (/=(.*)/s) captures everything after the first '='
        const [key, value] = curr.split(/=(.*)/s);
        // Return a new object, spreading the accumulator and adding the new key-value pair
        return { ...acc, [key]: value };
      }, {} as LiqPayPayload);

    const privateKey = process.env.PRIVATE_LIQPAY_KEY || "";

    if (!privateKey) {
      throw new Error("PRIVATE_LIQPAY_KEY is not set");
    }

    const generatedLiqPaySignature = generateLiqPaySignature(
      body.data,
      privateKey
    );

    // Check signatures, if false return
    if (generatedLiqPaySignature !== body.signature) {
      return createResponse({
        message: "Invalid signature",
        success: false,
        status: 400,
      });
    }

    // Parse data
    const data = JSON.parse(decodeBase64(body.data)) as LiqPayObject;
    const customData = JSON.parse(
      decodeBase64(data.dae as string)
    ) as LiqPayCustomData;

    // Return if payments not 'sucess' or 'subscribed'
    if (
      data.status !== PAYMENT_STATUS.SUCESS &&
      data.status !== PAYMENT_STATUS.SUBSCRIBED
    ) {
      console.log(
        `Payment ${data.payment_id} status is ${data.status}. Not processing.`
      );
      return createResponse({
        message: "Payment is not processed",
        success: true,
        status: 200,
      });
    }

    // Check if create_date exists, if it is, creates date with that value,
    // if not, fallback to current date
    const dateObject = data.create_date
      ? new Date(data.create_date)
      : new Date();

    // Get sendpulse request with data
    const sendpulseRequest = await fetch(
      `${SENDPULSE_API_URL}/71cd2c45232e4e119d18a3a356ad331d/8603131`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: customData.email,
          amount: Number(data.amount),
          payment_id: Number(data.payment_id),
          type: data.action,
          date: format(new Date(dateObject), "yyyy-MM-dd"),
        }),
      }
    );

    // If request failed return, status 200 to tell liqpay to not send more callbacks, but message contains error
    if (!sendpulseRequest.ok) {
      console.error("Sendpulse request failed", {
        status: sendpulseRequest.status,
        message: sendpulseRequest.statusText,
      });

      return createResponse({
        message: "There was a problem with the server sendpulseRequest.",
        success: true,
        status: 200,
      });
    }

    // Succesfull response
    const sendpulseResponse = await sendpulseRequest.json();
    console.log("Sendpulse response:", sendpulseResponse);

    // Return success response
    return createResponse({
      message: "Payment processed successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error("Error processing LiqPay callback", error);
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
