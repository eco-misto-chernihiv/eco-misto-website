import { e as createAstro, c as createComponent, j as defineStyleVars, m as maybeRenderHead, k as addAttribute, s as spreadAttributes, r as renderComponent, a as renderTemplate, b as renderSlot, f as renderScript } from './astro/server_-TgDsRa7.mjs';
import { i as $$Icon, h as $$Cluster } from './BaseLayout_p89_ALhG.mjs';
/* empty css                         */
/* empty css                         */

const $$Astro$5 = createAstro("https://ecomisto.org");
const $$ArrowIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ArrowIcon;
  const styleOptions = {
    primary: "primary",
    secondary: "secondary"
  };
  const directionOptions = {
    left: "left",
    right: "right"
  };
  const {
    class: classList,
    style,
    size = 40,
    direction = "right",
    isOutline = false,
    ...rest
  } = Astro2.props;
  const arrowIconSize = `${size}px`;
  const $$definedVars = defineStyleVars([{ arrowIconSize }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "arrow",
    classList,
    styleOptions[style],
    directionOptions[direction],
    { outline: isOutline }
  ], "class:list")}${spreadAttributes(rest)} data-astro-cid-xxwwxqrn${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-arrow-right", "size": 32, "data-astro-cid-xxwwxqrn": true })} </div> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/ArrowIcon.astro", void 0);

const $$Astro$4 = createAstro("https://ecomisto.org");
const $$SwiperButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SwiperButton;
  const { direction, size = 40, class: classList } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["swiper-button", classList], "class:list")}${addAttribute(direction, "data-direction")} data-astro-cid-5nycpk2d> ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, { "size": size, "style": "primary", "direction": direction, "data-astro-cid-5nycpk2d": true })} </div> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/SwiperButton.astro", void 0);

const $$SwiperPaginationProgress = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Cluster", $$Cluster, { "alignItems": "center", "space": "space-0", "noWrap": true, "class": "swiper-pagination-wrapper", "data-astro-cid-jkc3otgp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="swiper-pagination" data-astro-cid-jkc3otgp> <span class="swiper-pagination-progressbar-fill" data-astro-cid-jkc3otgp></span> </div> <div class="round-corner" data-astro-cid-jkc3otgp></div> ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/SwiperPaginationProgress.astro", void 0);

const $$Astro$3 = createAstro("https://ecomisto.org");
const $$AutoGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/compositions/AutoGrid.astro", void 0);

const $$Astro$2 = createAstro("https://ecomisto.org");
const $$Marquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Marquee;
  const {
    space = "space-4",
    class: classList,
    direction = "left",
    duration,
    ...rest
  } = Astro2.props;
  const marqueeGap = `var(--${space}-fixed)`;
  const $$definedVars = defineStyleVars([{ marqueeGap }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["marquee", [classList]], "class:list")}${spreadAttributes(rest)}${addAttribute(direction, "data-direction")}${addAttribute(duration, "data-duration")}${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div>  ${renderScript($$result, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/Marquee.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/Marquee.astro", void 0);

const $$Astro$1 = createAstro("https://ecomisto.org");
const $$EmptyShape = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EmptyShape;
  const { top, left, right, bottom, class: classList, ...rest } = Astro2.props;
  const $$definedVars = defineStyleVars([{ top, left, right, bottom }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["empty-shape", classList], "class:list")}${spreadAttributes(rest)} data-astro-cid-dns2enbp${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/EmptyShape.astro", void 0);

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
    noArrow = false,
    ...rest
  } = Astro2.props;
  const Tag = tagName;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "button-arrow",
    classList,
    styleOptions[style],
    { ["no-arrow"]: noArrow }
  ], ...rest, "data-astro-cid-brl7mbjh": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "data-astro-cid-brl7mbjh": true })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/ButtonArrow.astro", void 0);

export { $$SwiperPaginationProgress as $, $$SwiperButton as a, $$AutoGrid as b, $$Marquee as c, $$EmptyShape as d, $$ButtonArrow as e };
