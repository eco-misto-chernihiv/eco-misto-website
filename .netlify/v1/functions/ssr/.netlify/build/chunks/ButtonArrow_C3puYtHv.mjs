import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as renderSlot } from './astro/server_D3nJfXsh.mjs';
import { $ as $$Icon } from './BaseLayout_B6BAOn-F.mjs';
/* empty css                         */

const $$Astro = createAstro("https://ecomisto.org");
const $$ButtonArrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonArrow;
  const styleOptions = {
    primary: "primary",
    secondary: "secondary"
  };
  const {
    class: classList,
    tagName = "button",
    style,
    rel = "",
    isExternal,
    noArrow = false,
    ...rest
  } = Astro2.props;
  const Tag = tagName;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "button-arrow",
    classList,
    styleOptions[style],
    { ["no-arrow"]: noArrow }
  ], "rel": `${rel}${isExternal ? "nofollow noopener norefferer external" : ""}`, ...rest, "data-astro-cid-brl7mbjh": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "data-astro-cid-brl7mbjh": true })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/ButtonArrow.astro", void 0);

export { $$ButtonArrow as $ };
