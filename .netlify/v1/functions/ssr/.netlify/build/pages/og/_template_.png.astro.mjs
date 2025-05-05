import satori from 'satori';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import '@resvg/resvg-js';
import { html } from 'satori-html';
export { renderers } from '../../renderers.mjs';

const templates = {
  // Default template
  default: (data) => html`<div
    style="position: relative; display: flex; flex-direction: column;  background: #004737; height: 100%; color: #FFFBEC; padding: 0 0 6rem 6rem;"
  >
    <img
      src="https://ecomisto.org/images/bg.png"
      width="1200"
      height="493"
      style="position: absolute; top: 4rem;"
    />

    <div
      style="display: flex; flex-direction: column; gap: 7rem; margin-top: auto;"
    >
      <svg
        width="380"
        height="85"
        viewBox="0 0 380 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60.8291 6.87107L52.095 1.95298C47.6248 -0.614472 42.0428 -0.660116 37.4866 1.8731L15.8807 14.2881C6.08635 19.9194 0 30.4117 0 41.6686V68.1704C0 70.133 1.59896 71.7249 3.57043 71.7249C5.5419 71.7249 7.14086 70.133 7.14086 68.1704V41.6686C7.14086 32.9392 11.8575 24.8033 19.4511 20.4443L41.0169 8.0521C43.3437 6.76267 46.2207 6.77978 48.5532 8.12056L57.2873 13.0387C59.6313 14.3851 61.0927 16.9012 61.0927 19.5999V53.9866C61.0927 56.6853 59.637 59.1957 57.2873 60.5479L27.4058 77.7213V66.7611C27.4058 64.0054 28.8958 61.4265 31.2857 60.0344L45.1433 51.984C46.8454 50.997 47.4242 48.8175 46.427 47.123C45.4356 45.4285 43.2463 44.8579 41.5442 45.845L27.6808 53.8953C27.5834 53.9524 27.4917 54.0152 27.4 54.0722V42.9523C27.4 40.2422 28.8614 37.709 31.2169 36.3397L48.536 26.281C50.2382 25.2939 50.8113 23.1145 49.8198 21.42C48.8283 19.7254 46.6391 19.1549 44.937 20.1419L27.6178 30.2063C23.0788 32.8423 20.2649 37.7261 20.2649 42.958V77.7897C20.2649 80.3458 21.5945 82.6337 23.8181 83.9174C24.93 84.5564 26.1507 84.8759 27.3714 84.8759C28.5921 84.8759 29.8128 84.5564 30.9246 83.9174L60.8577 66.7098C65.4082 64.0967 68.2336 59.2242 68.2336 53.9923V19.6056C68.2336 14.3794 65.4082 9.50128 60.8348 6.87678"
          fill="#56F09F"
        />
        <path
          d="M254.621 59.3577H248.074V34.2489L237.857 56.4133C237.029 58.2035 235.236 59.3577 233.26 59.3577C231.283 59.3577 229.497 58.2167 228.67 56.433L218.459 34.4588V59.3577H211.912V24.9635H220.869L233.411 52.5444L245.809 24.9635H254.627V59.3577H254.621Z"
          fill="#56F09F"
        />
        <path
          d="M269.606 24.9635H262.949V59.3577H269.606V24.9635Z"
          fill="#56F09F"
        />
        <path
          d="M293.896 24.4152C301.419 24.4152 308.186 29.264 310.102 36.3647H302.99C301.419 32.746 297.794 30.4225 293.557 30.4225C287.058 30.4225 282.41 35.5447 282.41 42.1638C282.41 48.7829 287.058 53.905 293.557 53.905C297.794 53.905 301.419 51.5815 302.99 47.9628H310.102C308.186 55.0635 301.419 59.9123 293.896 59.9123C283.635 59.9123 275.708 52.1998 275.708 42.1638C275.708 32.1277 283.642 24.4087 293.896 24.4087"
          fill="#56F09F"
        />
        <path
          d="M342.832 31.1538H330.614V59.3577H323.985V31.1538H311.767V24.9635H342.832V31.1538Z"
          fill="#56F09F"
        />
        <path
          d="M343.941 42.1605C343.941 32.1263 351.834 24.4087 362.042 24.4087C372.25 24.4087 380 32.1198 380 42.1605C380 52.2012 372.179 59.9123 362.042 59.9123C351.905 59.9123 343.941 52.2012 343.941 42.1605ZM373.333 42.1605C373.333 35.5361 368.436 30.4214 362.042 30.4214C355.647 30.4214 350.615 35.5426 350.615 42.1605C350.615 48.7784 355.583 53.8996 362.042 53.8996C368.501 53.8996 373.333 48.7784 373.333 42.1605Z"
          fill="#56F09F"
        />
        <path
          d="M119.756 44.8257H91.6625C92.6227 50.1497 97.1426 53.905 102.486 53.905C107.28 53.905 110.226 51.9915 111.944 49.0562H118.658C116.464 55.402 110.023 59.9123 102.486 59.9123C92.2765 59.9123 84.876 52.4016 84.876 42.1573C84.876 31.9129 92.2765 24.4087 102.414 24.4087C113.648 24.4087 120.637 32.3946 119.749 44.8257M91.7278 39.1569H112.76C112.211 33.6247 107.894 30.1492 102.277 30.1492C96.6593 30.1492 92.6161 33.9045 91.7278 39.1569Z"
          fill="#56F09F"
        />
        <path
          d="M157.547 53.2329V59.3577H155.705C144.917 59.3577 138.628 45.2524 133.101 45.2524H132.418V59.3577H125.927V24.9635H132.418V40.1638L148.739 24.9635H156.864L138.973 41.3376C145.327 44.1573 150.991 53.2395 156.525 53.2395H157.547V53.2329Z"
          fill="#56F09F"
        />
        <path
          d="M158.657 42.1605C158.657 32.1263 166.671 24.4087 177.029 24.4087C187.388 24.4087 195.27 32.1198 195.27 42.1605C195.27 52.2012 187.328 59.9123 177.029 59.9123C166.73 59.9123 158.657 52.2012 158.657 42.1605ZM188.5 42.1605C188.5 35.5361 183.529 30.4214 177.029 30.4214C170.53 30.4214 165.426 35.5426 165.426 42.1605C165.426 48.7784 170.47 53.8996 177.029 53.8996C183.588 53.8996 188.5 48.7784 188.5 42.1605Z"
          fill="#56F09F"
        />
      </svg>

      <div style=" display: flex; flex-direction: column;">
        <h1 style=" font-size: 5rem; line-height: 1.2; margin: 0;">
          Події. Простори.
        </h1>
        <h1 style=" font-size: 5rem; margin: 0;">${data?.basic?.title}</h1>
      </div>
    </div>
  </div>`,
  projectCover: (data) => html`
    <div
      style="display: flex; align-items: center; justify-content: center; background: #FFFBEC; "
    >
      <img src="${data?.image}" style="height: 100%;" />
    </div>
  `,
  projectPhoto: (data) => html`
    <div style="display: flex; align-items: center; justify-content: center; ">
      <img src="${data?.image}" style="object-fit: cover;" />
    </div>
  `
};

const prerender = false;
async function GET(context) {
  const { template } = context.params;
  if (!template) {
    return new Response("Must provide a template", { status: 400 });
  }
  const templateFn = templates[template];
  if (!templateFn) {
    return new Response("Template not found", { status: 404 });
  }
  const { searchParams } = new URL(context.request.url);
  const data = Object.fromEntries(searchParams.entries());
  const svg = await satori(templateFn(data), {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Ermilov Bold",
        data: await fs.readFile(
          path.join(process.cwd(), "src/og-templates/Ermilov-Bold.ttf")
        ),
        style: "normal"
      }
    ]
  });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(png, {
    status: 200,
    headers: { "Content-Type": "image/png" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
