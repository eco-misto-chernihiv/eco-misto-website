import { a as createComponent, h as defineStyleVars, b as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, e as renderSlot, g as createAstro } from './astro/server_BrDdyJt0.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$EmptyShape = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EmptyShape;
  const { top, left, right, bottom, class: classList, ...rest } = Astro2.props;
  const $$definedVars = defineStyleVars([{ top, left, right, bottom }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["empty-shape", classList], "class:list")}${spreadAttributes(rest)} data-astro-cid-dns2enbp${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/EmptyShape.astro", void 0);

export { $$EmptyShape as $ };
