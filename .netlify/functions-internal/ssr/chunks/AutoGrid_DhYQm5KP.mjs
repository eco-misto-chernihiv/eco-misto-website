import { a as createComponent, b as renderTemplate, m as maybeRenderHead, d as renderComponent, f as createAstro, h as defineStyleVars, g as addAttribute, s as spreadAttributes, e as renderSlot } from './astro/server_CFD6V1YY.mjs';
import { $ as $$Heading, f as $$Text, a as $$Stack, m as cooperationData, n as $$InputGroup, o as $$UserDataAgreement, i as $$Button } from './BaseLayout_BUBBflPD.mjs';
/* empty css                         */

const $$Partnership = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="partnership aside-modal"> <form action="" data-form="partnership"> ${renderComponent($$result, "Stack", $$Stack, { "space": "space-4", "class": "header" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h2", "size": "h6", "class": "color-secondary font-heading" }, { "default": ($$result3) => renderTemplate`Опишіть ваш запит` })} ${renderComponent($$result2, "Text", $$Text, { "tagName": "p", "size": "small" }, { "default": ($$result3) => renderTemplate`Розкажіть про себе та сформулюйте свою пропозицію, або ідею. Ми
        постараємось дати відповідь якнайшвидше.` })} ` })} <div class="main"> ${renderComponent($$result, "Stack", $$Stack, { "space": "space-5" }, { "default": ($$result2) => renderTemplate`${cooperationData.map((data) => renderTemplate`${renderComponent($$result2, "InputGroup", $$InputGroup, { "data": data })}`)}` })} </div> ${renderComponent($$result, "Stack", $$Stack, { "space": "space-7", "class": "footer" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserDataAgreement", $$UserDataAgreement, {})} ${renderComponent($$result2, "Button", $$Button, { "style": "secondary", "type": "submit" }, { "default": ($$result3) => renderTemplate` Надіслати ` })} ` })} </form> </aside>  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/Partnership.astro", void 0);

const $$Astro$1 = createAstro("https://ecomisto.org");
const $$EmptyShape = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EmptyShape;
  const { top, left, right, bottom, class: classList, ...rest } = Astro2.props;
  const $$definedVars = defineStyleVars([{ top, left, right, bottom }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["empty-shape", classList], "class:list")}${spreadAttributes(rest)} data-astro-cid-dns2enbp${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/EmptyShape.astro", void 0);

const $$Astro = createAstro("https://ecomisto.org");
const $$AutoGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AutoGrid;
  const {
    space = "space-4",
    class: classList,
    minItemWidth = "250px",
    maxColumns,
    justifyItems,
    ...rest
  } = Astro2.props;
  const gap = `var(--${space}-fixed)`;
  const $$definedVars = defineStyleVars([{ minItemWidth, gap, maxColumns }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "auto-grid",
    classList,
    { ["justify-items-" + justifyItems]: justifyItems }
  ], "class:list")}${spreadAttributes(rest)} data-astro-cid-d3reksu5${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/compositions/AutoGrid.astro", void 0);

export { $$Partnership as $, $$EmptyShape as a, $$AutoGrid as b };
