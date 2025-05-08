import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_-TgDsRa7.mjs';
import { a as $$BaseLayout, $ as $$Center, b as $$Stack, c as $$Heading, d as $$Text, e as $$Button, g as getRelativeLocaleUrl } from '../chunks/BaseLayout_zKvAcCY5.mjs';
import { n as notFoundData, b as buttonsData } from '../chunks/favicon_HgU9u92E.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ecomisto.org");
const prerender = false;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const currentLocale = Astro2.currentLocale;
  const buttons = buttonsData[currentLocale];
  const notFound = notFoundData[currentLocale];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": { title: notFound.headTitle }, "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Center", $$Center, { "maxWidth": "45ch", "class": "container", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-zetdm5md": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "tagName": "h1", "size": "h2", "class": "color-secondary", "data-astro-cid-zetdm5md": true }, { "default": ($$result6) => renderTemplate`404` })} ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-zetdm5md": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h2", "size": "h5", "class": "color-secondary", "data-astro-cid-zetdm5md": true }, { "default": ($$result7) => renderTemplate`${notFound.title}` })} ${renderComponent($$result6, "Text", $$Text, { "tagName": "p", "size": "medium", "data-astro-cid-zetdm5md": true }, { "default": ($$result7) => renderTemplate`${notFound.description}` })} ${renderComponent($$result6, "Button", $$Button, { "tagName": "a", "href": `${getRelativeLocaleUrl(currentLocale, "/")}`, "style": "secondary", "aria-label": "Go back to the main page", "data-astro-cid-zetdm5md": true }, { "default": ($$result7) => renderTemplate`${buttons.backToMain}` })} ` })} ` })} ` })} ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/pages/404.astro", void 0);

const $$file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
