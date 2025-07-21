import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as createAstro } from '../chunks/astro/server_-TgDsRa7.mjs';
import { h as $$Cluster, $ as $$Center, b as $$Stack, c as $$Heading, d as $$Text, e as $$Button, i as $$Icon, j as $$Shape, a as $$BaseLayout } from '../chunks/BaseLayout_p89_ALhG.mjs';
import { $ as $$TeamMember, h as heroImg, a as $$VideoDialog, b as $$Donors, c as $$Mission, d as $$ProjectsSection, e as $$Partners, f as $$Youtube } from '../chunks/ProjectsSection_DqpeYxjo.mjs';
import { c as getCollection, f as $$Section, d as $$Row, b as $$MyPicture } from '../chunks/TimePeriod_ua_JRHU9.mjs';
import { $ as $$SwiperPaginationProgress, a as $$SwiperButton } from '../chunks/ButtonArrow_q-D1L4et.mjs';
/* empty css                                 */
import { c as aboutData, b as buttonsData } from '../chunks/favicon__X-QdrWS.mjs';
export { renderers } from '../renderers.mjs';

const $$TeamMembers = createComponent(async ($$result, $$props, $$slots) => {
  const members = await getCollection("members");
  const sortedMembers = members.sort((a, b) => a.data.indexId - b.data.indexId);
  return renderTemplate`${maybeRenderHead()}<div class="team-members-gallery" data-astro-cid-ecfzeslq> <div class="team-members-swiper swiper" data-astro-cid-ecfzeslq> <div class="swiper-wrapper" data-astro-cid-ecfzeslq> ${sortedMembers.map((member) => {
    return renderTemplate`<div class="swiper-slide" data-astro-cid-ecfzeslq> <div role="listitem" data-astro-cid-ecfzeslq> ${renderComponent($$result, "TeamMember", $$TeamMember, { "member": member, "data-astro-cid-ecfzeslq": true })} </div> </div>`;
  })} </div> </div> <div class="swiper-navigation" data-astro-cid-ecfzeslq> ${renderComponent($$result, "Cluster", $$Cluster, { "space": { default: "space-8", tablet: "space-10" }, "alignItems": "center", "noWrap": true, "data-astro-cid-ecfzeslq": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SwiperPaginationProgress", $$SwiperPaginationProgress, { "data-astro-cid-ecfzeslq": true })} ${renderComponent($$result2, "Cluster", $$Cluster, { "space": "space-2", "noWrap": true, "class": "swiper-buttons", "data-astro-cid-ecfzeslq": true }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "SwiperButton", $$SwiperButton, { "direction": "left", "class": "team-swiper-button-prev", "data-astro-cid-ecfzeslq": true })} ${renderComponent($$result3, "SwiperButton", $$SwiperButton, { "direction": "right", "class": "team-swiper-button-next", "data-astro-cid-ecfzeslq": true })} ` })} ` })} </div> </div> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/TeamMembers.astro", void 0);

const $$Astro$2 = createAstro("https://ecomisto.org");
const $$Team = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Team;
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "team", "isRoundTop": true, "color": "white", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-2qaj5cqa": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h3", "size": "h6", "class": "color-secondary", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result5) => renderTemplate`${currentLocale === "ua" ? "\u041A\u043E\u043C\u0430\u043D\u0434\u0430" : "Our team"}` })} ${renderComponent($$result4, "TeamMembers", $$TeamMembers, { "data-astro-cid-2qaj5cqa": true })} ` })} ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Team.astro", void 0);

const $$Astro$1 = createAstro("https://ecomisto.org");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  const currentLocale = Astro2.currentLocale;
  const about = aboutData[currentLocale];
  const buttons = buttonsData[currentLocale];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "hero", "isRoundBottom": true, "color": "secondary", "data-astro-cid-ewxirvlt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-ewxirvlt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Row", $$Row, { "class": "hero-grid", "rowGap": { default: "space-7", tablet: "space-14", laptop: "space-0" }, "alignItems": "center", "data-astro-cid-ewxirvlt": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="hero-text col-12" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h1", "size": { default: "h2", tablet: "h1" }, "class": "font-heading", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate`Події. Простори.<br data-astro-cid-ewxirvlt>Спільнота.` })} </div> <div class="about-text col-12" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Stack", $$Stack, { "space": { default: "space-4", laptop: "space-7" }, "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "large", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`${about.p1}` })} ${renderComponent($$result5, "Button", $$Button, { "style": "primary", "isInverted": true, "data-open-partnership": true, "aria-label": "Open cooperation form modal", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`${buttons.contact}` })} ` })} </div> <div class="hero-image col-12 tablet:col-10 laptop:col-8" data-astro-cid-ewxirvlt> <div class="img-wrapper" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": heroImg, "width": 850, "alt": "", "data-astro-cid-ewxirvlt": true })} </div> <div class="play-video" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Button", $$Button, { "variant": "icon", "style": "ghost", "isDefault": false, "data-open-promo": true, "aria-label": "Open ecomisto showreel modal", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "play-video", "class": "icon-play-video", "size": 120, "data-astro-cid-ewxirvlt": true })} ` })} ${renderComponent($$result4, "Icon", $$Icon, { "name": "icon-play", "class": "icon-play", "size": 32, "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "VideoDialog", $$VideoDialog, { "name": "promo-video", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` <video src="/ecomisto-showreel.mp4" controls autoplay playsinline muted data-astro-cid-ewxirvlt></video> ` })} </div> <div class="about-text tablet" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": "-100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "bottom", "translateY": "100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-5", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`${about.p1}` })} ${renderComponent($$result5, "Button", $$Button, { "style": "primary", "isInverted": true, "data-open-partnership": true, "aria-label": "Open cooperation form modal", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`${buttons.contact}` })} ` })} </div> <div class="hero-text laptop" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": "-100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "bottom", "translateY": "100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h1", "size": "h1", "class": "font-heading", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate`Події. Простори.<br data-astro-cid-ewxirvlt>Спільнота.` })} </div> </div> ` })} ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Hero.astro", void 0);

const $$Astro = createAstro("https://ecomisto.org");
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.response.headers.set(
    "Cache-Control",
    "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800"
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Donors", $$Donors, {})} ${renderComponent($$result2, "Mission", $$Mission, {})} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})} ${renderComponent($$result2, "Partners", $$Partners, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Youtube", $$Youtube, {})} ` })}`;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/pages/ua/index.astro", void 0);

const $$file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/pages/ua/index.astro";
const $$url = "/ua";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
