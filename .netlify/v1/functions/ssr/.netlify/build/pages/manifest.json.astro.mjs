import { g as getImage } from '../chunks/internal_CSE0eue_.mjs';
import { f as favicon, a as baseData } from '../chunks/favicon_Cy_h1x3u.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const faviconPngSizes = [192, 512];
const GET = async () => {
  const locale = "en";
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: "png"
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`
      };
    })
  );
  const manifest = {
    name: baseData[locale].title,
    description: baseData[locale].description,
    start_url: "/",
    display: "standalone",
    id: "ecomisto-id",
    icons
  };
  return new Response(JSON.stringify(manifest));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
