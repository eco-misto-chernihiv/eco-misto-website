import sanitizeHtml from 'sanitize-html';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    let { name, organization, message, source = "", email } = body;
    if (!name || typeof name !== "string" || !organization || typeof organization !== "string" || !message || typeof message !== "string" || typeof source !== "string" || !email || typeof email !== "string") {
      return new Response("Please provide all required data", {
        status: 404
      });
    }
    name = sanitizeHtml(name);
    organization = sanitizeHtml(organization);
    message = sanitizeHtml(message);
    source = sanitizeHtml(source);
    email = sanitizeHtml(email);
    const sendpulseRequest = await fetch(
      "https://events.sendpulse.com/events/id/a5845b0419324023828b3577f1e43dff/8603131",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          phone: "0",
          data: {
            name,
            organisation: organization,
            topic: message,
            found_out_from: source
          }
        })
      }
    );
    if (!sendpulseRequest.ok) {
      throw new Error("There was a problem with the server sendpulseRequest.");
    }
    const sendpulseResponse = await sendpulseRequest.json();
    return new Response(
      JSON.stringify({
        message: sendpulseResponse,
        success: true
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({
          message: error.message,
          sucess: false
        }),
        {
          status: 500
        }
      );
    }
  }
  return new Response(
    JSON.stringify({
      message: "Something went wrong",
      success: false
    }),
    {
      status: 404
    }
  );
};

export { POST, prerender };
