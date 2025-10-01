import sharp from 'sharp';
import ico from 'sharp-ico';
import path from 'node:path';
export { renderers } from '../renderers.mjs';

const prerender = false;
const faviconSrc = path.resolve("src/assets/favicon.png");
const GET = async () => {
  const buffer = await sharp(faviconSrc).resize(32).toFormat("png").toBuffer();
  const icoBuffer = ico.encode([buffer]);
  return new Response(icoBuffer, {
    headers: { "Content-Type": "image/x-icon" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
