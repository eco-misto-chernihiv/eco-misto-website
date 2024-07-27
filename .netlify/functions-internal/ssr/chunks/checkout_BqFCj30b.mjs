import { c as createResponse, g as generateLiqPaySignature } from './helpers_C1eUHQX2.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const { data } = await request.json();
    if (!data || typeof data !== "string") {
      return createResponse({
        message: "Please provide json string",
        success: false,
        status: 404
      });
    }
    const privateKey = "sandbox_gtALsRt0IWAtnGR3vXfus4FWtL5mzLblUHnCGbFy";
    if (!privateKey) ;
    const signature = generateLiqPaySignature(data, privateKey);
    return new Response(
      JSON.stringify({
        data: signature,
        success: true
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return createResponse({
        message: error.message,
        success: false,
        status: 500
      });
    }
  }
  return createResponse({
    message: "An unexpected error occurred",
    success: false,
    status: 404
  });
};

export { POST, prerender };
