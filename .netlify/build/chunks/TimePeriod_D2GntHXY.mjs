import { c as createAstro, a as createComponent, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, d as renderSlot, b as renderTemplate, r as renderComponent } from './astro/server_D3nJfXsh.mjs';
/* empty css                         */
import { e as $$Text } from './BaseLayout_B6BAOn-F.mjs';

const getProjectIdWithoutLang = (id) => id.split("/")[1];

const $$Astro = createAstro("https://ecomisto.org");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { class: classList, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(["project-card", classList], "class:list")}${spreadAttributes(rest)} data-astro-cid-mspuyifq> ${renderSlot($$result, $$slots["default"])} </article> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ProjectCard.astro", void 0);

const $$TimePeriod = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="time-period" data-astro-cid-d7abjbmi> ${renderComponent($$result, "Text", $$Text, { "tagName": "p", "size": "small", "class": "color-secondary font-medium", "data-astro-cid-d7abjbmi": true }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })} </div> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/TimePeriod.astro", void 0);

export { $$ProjectCard as $, $$TimePeriod as a, getProjectIdWithoutLang as g };
