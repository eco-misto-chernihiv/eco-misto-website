import { a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, d as renderComponent, g as createAstro, h as defineStyleVars, s as spreadAttributes, e as renderSlot } from './astro/server_BA-ZvcyS.mjs';
import { f as $$Shape, $ as $$Heading, g as $$Text, b as $$Center, i as achievmentsData, a as $$Stack, d as $$Icon, j as $$Button, k as cooperationData, c as $$BaseLayout } from './BaseLayout_oBDNaKon.mjs';
import { d as $$MyPicture, $ as $$Section, c as $$Row, b as $$Frame, g as getCollection, a as $$AutoGrid } from './AutoGrid_Bk4q0PLS.mjs';
/* empty css                         */
import { $ as $$EmptyShape } from './EmptyShape_DLRc9FpR.mjs';
import { $ as $$ArchiveProjectCard, b as $$ActiveProjects, a as $$ButtonArrow } from './ArchiveProjectCard_BZa4Xhgr.mjs';

const $$Astro$6 = createAstro();
const $$Achievment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Achievment;
  const { achievment } = Astro2.props;
  const {
    title,
    description,
    id,
    "left-translateX": leftTranslateX,
    "right-translateX": rightTranslateX,
    "left-rotate": leftRotate,
    "right-rotate": rightRotate
  } = achievment;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["achievment", id], "class:list")} data-astro-cid-yanjpqo6> ${renderComponent($$result, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": leftTranslateX, "rotate": leftRotate, "data-astro-cid-yanjpqo6": true })} ${renderComponent($$result, "Shape", $$Shape, { "color": "secondary", "class": "right", "translateX": rightTranslateX, "rotate": rightRotate, "data-astro-cid-yanjpqo6": true })} <div class="content" data-astro-cid-yanjpqo6> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h4", "size": "h3", "class": "numner font-heading", "data-astro-cid-yanjpqo6": true }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderComponent($$result, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "description", "data-astro-cid-yanjpqo6": true }, { "default": ($$result2) => renderTemplate`${description}` })} </div> </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Achievment.astro", void 0);

const achievmentsBg = new Proxy({"src":"/_astro/achievments-bg-final.CgPE6Tpw.jpg","width":2800,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/assets/images/achievments-bg-final.jpg";
							}
							
							return target[name];
						}
					});

const $$Achievments = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "achievments", "data-astro-cid-hjhrmcmx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-hjhrmcmx": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="achievments-container" data-astro-cid-hjhrmcmx> <div class="bg-image" data-astro-cid-hjhrmcmx> ${renderComponent($$result3, "MyPicture", $$MyPicture, { "src": achievmentsBg, "width": 1400, "alt": "", "data-astro-cid-hjhrmcmx": true })} </div> ${achievmentsData.map((achievment) => renderTemplate`${renderComponent($$result3, "Achievment", $$Achievment, { "achievment": achievment, "data-astro-cid-hjhrmcmx": true })}`)} </div> ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Achievments.astro", void 0);

const $$Mission = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "color": "secondary", "isRound": true, "class": "mission", "data-astro-cid-mum6lvxz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-12", "data-astro-cid-mum6lvxz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-mum6lvxz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Row", $$Row, { "data-astro-cid-mum6lvxz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-4", "class": "col-12 tablet:col-9 laptop:col-8", "data-astro-cid-mum6lvxz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Text", $$Text, { "tagName": "div", "size": "large", "class": "color-secondary font-medium", "variant": "accent", "isBadge": true, "data-astro-cid-mum6lvxz": true }, { "default": ($$result7) => renderTemplate`Місія` })} ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h3", "size": "h4", "class": "mission-text color-primary font-heading", "data-astro-cid-mum6lvxz": true }, { "default": ($$result7) => renderTemplate`
Сприяти сталому розвитку Чернігова шляхом впровадження інноваційних
            та креативних рішень, залучаючи спільноту на всіх рівнях.
` })} ` })} ` })} ` })} ${renderComponent($$result3, "Achievments", $$Achievments, { "data-astro-cid-mum6lvxz": true })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Mission.astro", void 0);

const $$Astro$5 = createAstro();
const $$Reel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Reel;
  const {
    space = "space-4",
    class: classList,
    thumbColor,
    trackColor,
    isScrollSnapped = false,
    scrollSnapAlign,
    ...rest
  } = Astro2.props;
  const thumb = `var(--color-${thumbColor})`;
  const track = `var(--color-${trackColor})`;
  const $$definedVars = defineStyleVars([{ thumb, track, scrollSnapAlign }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "reel",
    classList,
    { ["gap-" + space]: space },
    { ["scroll-snap"]: isScrollSnapped }
  ], "class:list")}${spreadAttributes(rest)} data-astro-cid-bx5kbrew${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/compositions/Reel.astro", void 0);

const $$Astro$4 = createAstro();
const $$TeamMember = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TeamMember;
  const { member } = Astro2.props;
  const { name, position, picture } = member.data;
  return renderTemplate`${maybeRenderHead()}<figure class="team-member" data-astro-cid-siaceyfv> ${renderComponent($$result, "Frame", $$Frame, { "ratio": "3:4", "class": "member-photo", "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MyPicture", $$MyPicture, { "src": picture, "alt": "", "data-astro-cid-siaceyfv": true })} ` })} <figcaption class="member-info" data-astro-cid-siaceyfv> <div class="wrapper" data-astro-cid-siaceyfv> ${renderComponent($$result, "Shape", $$Shape, { "color": "white", "class": "top", "translateY": "-100%", "rotate": "180deg", "data-astro-cid-siaceyfv": true })} ${renderComponent($$result, "Shape", $$Shape, { "color": "white", "class": "right", "translateX": "100%", "rotate": "180deg", "data-astro-cid-siaceyfv": true })} <div class="info" data-astro-cid-siaceyfv> ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "medium", "isBolded": true, "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate`${name}` })} ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "small", "class": "position", "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate`${position}` })} </div> </div> </figcaption> </figure> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/TeamMember.astro", void 0);

const $$TeamMembers = createComponent(async ($$result, $$props, $$slots) => {
  const members = await getCollection("members");
  return renderTemplate`${renderComponent($$result, "Reel", $$Reel, { "role": "list", "thumbColor": "secondary", "trackColor": "white", "class": "members", "data-astro-cid-ecfzeslq": true }, { "default": ($$result2) => renderTemplate`${members.map((member) => {
    return renderTemplate`${maybeRenderHead()}<div role="listitem" class="reel-item" data-astro-cid-ecfzeslq> ${renderComponent($$result2, "TeamMember", $$TeamMember, { "member": member, "data-astro-cid-ecfzeslq": true })} </div>`;
  })}` })} ${renderComponent($$result, "AutoGrid", $$AutoGrid, { "minItemWidth": "220px", "maxColumns": "4", "space": "space-6", "role": "list", "class": "members tablet", "data-astro-cid-ecfzeslq": true }, { "default": ($$result2) => renderTemplate`${members.map((member) => {
    return renderTemplate`<div role="listitem" data-astro-cid-ecfzeslq> ${renderComponent($$result2, "TeamMember", $$TeamMember, { "member": member, "data-astro-cid-ecfzeslq": true })} </div>`;
  })}` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/TeamMembers.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "team", "isRoundTop": true, "color": "white", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-2qaj5cqa": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result5) => renderTemplate`Команда` })} ${renderComponent($$result4, "TeamMembers", $$TeamMembers, { "data-astro-cid-2qaj5cqa": true })} ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Team.astro", void 0);

const $$VideoModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="modal-overlay jsModalOverlay" data-modal data-astro-cid-3m42nvwd> <div class="modal" role="dialog" aria-modal="true" aria-label="Video modal" data-astro-cid-3m42nvwd> ${renderComponent($$result, "Button", $$Button, { "style": "icon", "class": "modal__close-button jsModalClose", "aria-label": "Close video", "isDefault": false, "data-astro-cid-3m42nvwd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-close", "size": 32, "data-astro-cid-3m42nvwd": true })} <span class="sr-only" data-astro-cid-3m42nvwd>Close video</span> ` })} <div class="modal__content" data-astro-cid-3m42nvwd> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/VideoModal.astro", void 0);

const heroImg = new Proxy({"src":"/_astro/hero.Ds-BNCRD.jpg","width":1600,"height":1068,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Volumes/Media HD/Web Development/ecomisto/src/assets/images/hero.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "hero", "isRoundBottom": true, "color": "secondary", "data-astro-cid-ewxirvlt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-ewxirvlt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Row", $$Row, { "class": "hero-grid", "rowGap": { default: "space-6", tablet: "space-14", laptop: "space-0" }, "alignItems": "center", "data-astro-cid-ewxirvlt": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="hero-text col-12" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h1", "size": "h1", "class": "font-heading", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate`Події. Простори.<br data-astro-cid-ewxirvlt>Спільнота.` })} </div> <div class="about-text col-12" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "large", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`
Громадська організація "Еко Місто Чернігів" — це урбаністична
            ініціатива, спрямована на покращення якості життя через проєкти
            тактичного урбанізму та формування спільнот.
` })} ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "large", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`
Наша діяльність включає популяризацію сталих підходів, а саме
            розвиток мейкерства, ресайклінг та підтримку велосипедного руху в
            Чернігові.
` })} ` })} </div> <div class="hero-image col-12 tablet:col-10 laptop:col-8" data-astro-cid-ewxirvlt> <div class="img-wrapper" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": heroImg, "width": 850, "alt": "", "data-astro-cid-ewxirvlt": true })} </div> <div class="play-video" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Button", $$Button, { "style": "icon", "isDefault": false, "data-open-modal": true, "aria-label": "Open ecomisto showreel modal", "aria-expanded": "false", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "play-video", "class": "icon-play-video", "size": 120, "data-astro-cid-ewxirvlt": true })} ` })} ${renderComponent($$result4, "Icon", $$Icon, { "name": "icon-play", "class": "icon-play", "size": 32, "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "VideoModal", $$VideoModal, { "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` <div class="video-container" data-astro-cid-ewxirvlt> <video src="/ecomisto-showreel.mp4" controls autoplay playsinline muted data-astro-cid-ewxirvlt></video> </div> ` })} </div> <div class="about-text tablet" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": "-100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "bottom", "translateY": "100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`
Громадська організація "Еко Місто Чернігів" — це урбаністична
              ініціатива, спрямована на покращення якості життя через проєкти
              тактичного урбанізму та формування спільнот.
` })} ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`
Наша діяльність включає популяризацію сталих підходів, а саме
              розвиток мейкерства, ресайклінг та підтримку велосипедного руху в
              Чернігові.
` })} ` })} </div> <div class="hero-text laptop" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": "-100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "bottom", "translateY": "100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h1", "size": "h1", "class": "font-heading", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate`Події. Простори.<br data-astro-cid-ewxirvlt>Спільнота.` })} </div> </div> ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Hero.astro", void 0);

const $$Astro$3 = createAstro();
const $$Marquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["marquee", [classList]], "class:list")}${spreadAttributes(rest)}${addAttribute(direction, "data-direction")}${addAttribute(duration, "data-duration")}${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/Marquee.astro", void 0);

const $$Astro$2 = createAstro();
const $$MyIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MyIcon;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg> <use${addAttribute(`./sprite.svg#${name}`, "href")}></use> </svg>`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/MyIcon.astro", void 0);

const $$Donors = createComponent(($$result, $$props, $$slots) => {
  const donors = [
    {
      name: "donors-usaid"
    },
    {
      name: "donors-ednannya"
    },
    {
      name: "donors-ahalar"
    },
    {
      name: "donors-czech"
    },
    {
      name: "donors-eed"
    },
    {
      name: "donors-ua-cult-fond"
    },
    {
      name: "donors-evz"
    },
    {
      name: "donors-tolocar"
    },
    {
      name: "donors-undp"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="donors" data-astro-cid-ocsizvzk> ${renderComponent($$result, "Center", $$Center, { "maxWidth": "125rem", "space": "space-4", "data-astro-cid-ocsizvzk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-9", "data-astro-cid-ocsizvzk": true }, { "default": ($$result3) => renderTemplate` <div class="title" data-astro-cid-ocsizvzk> ${renderComponent($$result3, "Text", $$Text, { "tagName": "div", "size": "medium", "class": "color-dark-gray", "isBadge": true, "variant": "outline", "data-astro-cid-ocsizvzk": true }, { "default": ($$result4) => renderTemplate`Донори` })} </div> ${renderComponent($$result3, "Marquee", $$Marquee, { "direction": "left", "space": "space-4", "duration": "slow", "data-astro-cid-ocsizvzk": true }, { "default": ($$result4) => renderTemplate` <div class="donor-logos marquee-inner" data-astro-cid-ocsizvzk> ${donors.map((donor) => {
    return renderTemplate`<div class="donor-logo" data-astro-cid-ocsizvzk> ${renderComponent($$result4, "MyIcon", $$MyIcon, { "name": donor.name, "data-astro-cid-ocsizvzk": true })} </div>`;
  })} </div> ` })} ` })} ` })}  </section>`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Donors.astro", void 0);

const $$PartnershipModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="modal-overlay jsModalOverlay" data-modal data-astro-cid-pedojxco> <div class="modal" role="dialog" aria-modal="true" aria-label="partnership form" data-astro-cid-pedojxco> ${renderComponent($$result, "Button", $$Button, { "style": "icon", "class": "modal__close-button jsModalClose", "aria-label": "Close partnership form", "isDefault": false, "data-astro-cid-pedojxco": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-close", "size": 32, "data-astro-cid-pedojxco": true })} <span class="sr-only" data-astro-cid-pedojxco>Close partnership form</span> ` })} <div class="modal__content" data-astro-cid-pedojxco> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/PartnershipModal.astro", void 0);

const $$Astro$1 = createAstro();
const $$InputGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InputGroup;
  const { data } = Astro2.props;
  const { label, name, formControl, placeholder, ...rest } = data;
  const Tag = formControl;
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-1", "class": "input-group", "data-astro-cid-6yv6f42d": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "tagName": "label", "size": "small", "for": name, "class": "font-medium", "data-astro-cid-6yv6f42d": true }, { "default": ($$result3) => renderTemplate`${label}` })} ${renderComponent($$result2, "Tag", Tag, { "id": name, "name": name, "placeholder": placeholder, ...rest, "data-astro-cid-6yv6f42d": true })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/InputGroup.astro", void 0);

const $$Partnership = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="partnership" data-astro-cid-ayx2gvov> <form action="" data-form="partnership" data-astro-cid-ayx2gvov> <div class="filler" data-astro-cid-ayx2gvov></div> <div class="inputs-container" data-astro-cid-ayx2gvov> <div class="inputs" data-astro-cid-ayx2gvov> ${cooperationData.map((data) => renderTemplate`${renderComponent($$result, "InputGroup", $$InputGroup, { "data": data, "data-astro-cid-ayx2gvov": true })}`)} </div> </div> ${renderComponent($$result, "Stack", $$Stack, { "space": "space-6", "class": "bottom", "data-astro-cid-ayx2gvov": true }, { "default": ($$result2) => renderTemplate` <div class="checkbox-group" data-astro-cid-ayx2gvov> ${renderComponent($$result2, "Text", $$Text, { "tagName": "label", "size": "medium", "for": "consent", "data-astro-cid-ayx2gvov": true }, { "default": ($$result3) => renderTemplate`Даю згоду на обробку персональних даних` })} <input type="checkbox" name="consent" id="consent" required data-astro-cid-ayx2gvov> </div> ${renderComponent($$result2, "Button", $$Button, { "style": "secondary", "type": "submit", "data-astro-cid-ayx2gvov": true }, { "default": ($$result3) => renderTemplate` Надіслати ` })} ` })} </form> </aside>  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/Partnership.astro", void 0);

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "partners", "data-astro-cid-pqooy3ar": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-pqooy3ar": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="inner" data-astro-cid-pqooy3ar> ${renderComponent($$result3, "EmptyShape", $$EmptyShape, { "class": "partners-shape", "top": "-1px", "left": "-1px", "data-astro-cid-pqooy3ar": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Shape", $$Shape, { "color": "white", "class": "top", "translateX": "100%", "rotate": "270deg", "data-astro-cid-pqooy3ar": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "white", "class": "bottom", "translateY": "100%", "rotate": "270deg", "data-astro-cid-pqooy3ar": true })} ` })} ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-pqooy3ar": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Row", $$Row, { "data-astro-cid-pqooy3ar": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-6", "class": "col-12 col-start-1 tablet:col-7 tablet:col-start-5 laptop:col-6 laptop:col-start-6", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Text", $$Text, { "tagName": "div", "size": "large", "class": "color-secondary font-medium", "isBadge": true, "variant": "accent", "data-astro-cid-pqooy3ar": true }, { "default": ($$result7) => renderTemplate`Партнери` })} ${renderComponent($$result6, "Stack", $$Stack, { "space": "space-5", "data-astro-cid-pqooy3ar": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "class": "color-primary font-heading", "data-astro-cid-pqooy3ar": true }, { "default": ($$result9) => renderTemplate`
Запрошуємо до співпраці
` })} ${renderComponent($$result8, "Text", $$Text, { "tagName": "p", "size": "large", "class": "color-accent", "data-astro-cid-pqooy3ar": true }, { "default": ($$result9) => renderTemplate`Ми пропонуємо спільно брати участь у соціальних змінах для
                  впровадження сталих підходів у розвитку міст. Свою місію
                  реалізуємо через урбаністичні інтервенції, освітні програми та
                  соціальне підприємництво. Долучайтесь до нас як волонтер або
                  партнер. Разом ми можемо творити зміни!
` })} ` })} ${renderComponent($$result7, "Button", $$Button, { "style": "primary", "data-open-modal": true, "aria-label": "Open cooperation form modal", "aria-expanded": "false", "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate`Співпрацювати
` })} ${renderComponent($$result7, "PartnershipModal", $$PartnershipModal, { "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "Partnership", $$Partnership, { "data-astro-cid-pqooy3ar": true })} ` })} ` })} ` })} ` })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-8", "data-astro-cid-pqooy3ar": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Marquee", $$Marquee, { "direction": "left", "space": "space-4", "duration": "slow", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` <div class="partner-logos marquee-inner" data-astro-cid-pqooy3ar> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-sendpulse", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-ahalar", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-tolocar", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-u-cycle", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-agenciya", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-chernigiv-it", "data-astro-cid-pqooy3ar": true })} </div> </div> ` })} ${renderComponent($$result5, "Marquee", $$Marquee, { "direction": "right", "space": "space-4", "duration": "slow", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` <div class="partner-logos marquee-inner" data-astro-cid-pqooy3ar> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-mart", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-ostriv", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-politehnika", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-uma", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-zelenew", "data-astro-cid-pqooy3ar": true })} </div> </div> ` })} ` })} ` })} </div> ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Partners.astro", void 0);

const $$ArchiveProjects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects", ({ data }) => !data.isDraft);
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-10" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h3", "size": "h5" }, { "default": ($$result3) => renderTemplate`Реалізовані проєкти` })} ${renderComponent($$result2, "AutoGrid", $$AutoGrid, { "maxColumns": "2", "space": "space-9", "minItemWidth": "320px" }, { "default": ($$result3) => renderTemplate`${projects.filter((project, index) => {
    return !project.data.isActive && index < 5;
  }).map((project) => {
    return renderTemplate`${renderComponent($$result3, "ArchiveProjectCard", $$ArchiveProjectCard, { "project": project })}`;
  })}` })} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/ArchiveProjects.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "projects", "data-astro-cid-qz6brpfc": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-qz6brpfc": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-qz6brpfc": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Stack", $$Stack, { "space": { default: "space-12", tablet: "space-14", laptop: "space-16" }, "data-astro-cid-qz6brpfc": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "ActiveProjects", $$ActiveProjects, { "data-astro-cid-qz6brpfc": true })} ${renderComponent($$result5, "ArchiveProjects", $$ArchiveProjects, { "data-astro-cid-qz6brpfc": true })} ` })} ${renderComponent($$result4, "ButtonArrow", $$ButtonArrow, { "tagName": "a", "style": "primary", "href": "/projects", "class": "all-projects", "data-astro-cid-qz6brpfc": true }, { "default": ($$result5) => renderTemplate`Усі проєкти
` })} ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Donors", $$Donors, {})} ${renderComponent($$result2, "Mission", $$Mission, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Partners", $$Partners, {})} ${renderComponent($$result2, "Team", $$Team, {})}  ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/pages/index.astro", void 0);

const $$file = "/Volumes/Media HD/Web Development/ecomisto/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
