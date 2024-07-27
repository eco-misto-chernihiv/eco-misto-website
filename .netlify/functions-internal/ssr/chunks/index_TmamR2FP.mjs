import { f as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, g as addAttribute, d as renderComponent, e as renderSlot, F as Fragment, h as defineStyleVars, s as spreadAttributes } from './astro/server_CFD6V1YY.mjs';
import { h as $$Shape, $ as $$Heading, f as $$Text, b as $$Center, l as achievmentsData, a as $$Stack, g as $$Icon, i as $$Button, j as $$SideModal, c as $$BaseLayout } from './BaseLayout_BUBBflPD.mjs';
import { e as $$MyPicture, $ as $$Section, d as $$Row, a as $$Frame, g as getCollection } from './TimePeriod_L07Q6a_p.mjs';
/* empty css                         */
import { p as parseTitle, a as getSortedProjects } from './helpers_C1eUHQX2.mjs';
import { b as $$AutoGrid, a as $$EmptyShape, $ as $$Partnership } from './AutoGrid_DhYQm5KP.mjs';
import { $ as $$ArchiveProjectCard, b as $$ActiveProjects, a as $$ButtonArrow } from './ArchiveProjectCard_CgZAqy4F.mjs';

const $$Astro$5 = createAstro("https://ecomisto.org");
const $$Achievment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "color": "secondary", "isRound": true, "class": "mission", "data-astro-cid-mum6lvxz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-12", "data-astro-cid-mum6lvxz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-mum6lvxz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Row", $$Row, { "data-astro-cid-mum6lvxz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-4", "class": "col-12 tablet:col-9 laptop:col-8", "data-astro-cid-mum6lvxz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Text", $$Text, { "tagName": "div", "size": "large", "class": "font-medium", "variant": "accent", "isBadge": true, "data-astro-cid-mum6lvxz": true }, { "default": ($$result7) => renderTemplate`Місія` })} ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h3", "size": "h4", "class": "mission-text color-primary font-heading", "data-astro-cid-mum6lvxz": true }, { "default": ($$result7) => renderTemplate`
Сприяти сталому розвитку Чернігова шляхом впровадження інноваційних
            та креативних рішень, залучаючи спільноту на всіх рівнях.
` })} ` })} ` })} ` })} ${renderComponent($$result3, "Achievments", $$Achievments, { "data-astro-cid-mum6lvxz": true })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Mission.astro", void 0);

const $$Astro$4 = createAstro("https://ecomisto.org");
const $$TeamMember = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TeamMember;
  const { member } = Astro2.props;
  const { name, position, picture } = member.data;
  return renderTemplate`${maybeRenderHead()}<figure class="team-member" data-astro-cid-siaceyfv> ${renderComponent($$result, "Frame", $$Frame, { "ratio": "3:4", "class": "member-photo", "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MyPicture", $$MyPicture, { "src": picture, "alt": "", "data-astro-cid-siaceyfv": true })} ` })} <figcaption class="member-info" data-astro-cid-siaceyfv> <div class="wrapper" data-astro-cid-siaceyfv> ${renderComponent($$result, "Shape", $$Shape, { "color": "white", "class": "top", "translateY": "-100%", "rotate": "180deg", "data-astro-cid-siaceyfv": true })} ${renderComponent($$result, "Shape", $$Shape, { "color": "white", "class": "right", "translateX": "100%", "rotate": "180deg", "data-astro-cid-siaceyfv": true })} <div class="info" data-astro-cid-siaceyfv> ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "medium", "isBolded": true, "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate`${name}` })} ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "small", "class": "position", "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate`${position}` })} </div> </div> </figcaption> </figure> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/TeamMember.astro", void 0);

const $$TeamMembers = createComponent(async ($$result, $$props, $$slots) => {
  const members = await getCollection("members");
  return renderTemplate`<!-- <Reel role="list" thumbColor="secondary" trackColor="white" class="members">
  {
    members.map((member) => {
      return (
        <div role="listitem" class="reel-item">
          <TeamMember member={member} />
        </div>
      );
    })
  }
</Reel>

<AutoGrid
  minItemWidth="220px"
  maxColumns="1"
  space="space-6"
  role="list"
  class="members tablet"
>
  {
    members.map((member) => {
      return (
        <div role="listitem">
          <TeamMember member={member} />
        </div>
      );
    })
  }
</AutoGrid> -->${maybeRenderHead()}<div class="members-test" data-astro-cid-ecfzeslq> ${renderComponent($$result, "TeamMember", $$TeamMember, { "member": members[0], "data-astro-cid-ecfzeslq": true })} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/TeamMembers.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "team", "isRoundTop": true, "color": "white", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-2qaj5cqa": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "data-astro-cid-2qaj5cqa": true }, { "default": ($$result5) => renderTemplate`Команда` })} ${renderComponent($$result4, "TeamMembers", $$TeamMembers, { "data-astro-cid-2qaj5cqa": true })} ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Team.astro", void 0);

const $$VideoModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="modal-overlay jsModalOverlay" data-modal data-astro-cid-3m42nvwd> <div class="modal" role="dialog" aria-modal="true" aria-label="Video modal" data-astro-cid-3m42nvwd> ${renderComponent($$result, "Button", $$Button, { "variant": "icon", "style": "ghost", "class": "modal__close-button jsModalClose", "aria-label": "Close video", "isDefault": false, "data-astro-cid-3m42nvwd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-close", "size": 32, "data-astro-cid-3m42nvwd": true })} <span class="sr-only" data-astro-cid-3m42nvwd>Close video</span> ` })} <div class="modal__content" data-astro-cid-3m42nvwd> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/VideoModal.astro", void 0);

const heroImg = new Proxy({"src":"/_astro/hero.DFoWXZAk.jpg","width":1400,"height":935,"format":"jpg","orientation":1}, {
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
` })} ` })} </div> <div class="hero-image col-12 tablet:col-10 laptop:col-8" data-astro-cid-ewxirvlt> <div class="img-wrapper" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": heroImg, "width": 850, "alt": "", "data-astro-cid-ewxirvlt": true })} </div> <div class="play-video" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Button", $$Button, { "variant": "icon", "style": "ghost", "isDefault": false, "data-open-modal": true, "aria-label": "Open ecomisto showreel modal", "aria-expanded": "false", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Icon", $$Icon, { "name": "play-video", "class": "icon-play-video", "size": 120, "data-astro-cid-ewxirvlt": true })} ` })} ${renderComponent($$result4, "Icon", $$Icon, { "name": "icon-play", "class": "icon-play", "size": 32, "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "VideoModal", $$VideoModal, { "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` <div class="video-container" data-astro-cid-ewxirvlt> <video src="/ecomisto-showreel.mp4" controls autoplay playsinline muted data-astro-cid-ewxirvlt></video> </div> ` })} </div> <div class="about-text tablet" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": "-100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "bottom", "translateY": "100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`
Громадська організація "Еко Місто Чернігів" — це урбаністична
              ініціатива, спрямована на покращення якості життя через проєкти
              тактичного урбанізму та формування спільнот.
` })} ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-accent", "data-astro-cid-ewxirvlt": true }, { "default": ($$result6) => renderTemplate`
Наша діяльність включає популяризацію сталих підходів, а саме
              розвиток мейкерства, ресайклінг та підтримку велосипедного руху в
              Чернігові.
` })} ` })} </div> <div class="hero-text laptop" data-astro-cid-ewxirvlt> ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": "-100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "secondary", "class": "bottom", "translateY": "100%", "data-astro-cid-ewxirvlt": true })} ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h1", "size": "h1", "class": "font-heading", "data-astro-cid-ewxirvlt": true }, { "default": ($$result5) => renderTemplate`Події. Простори.<br data-astro-cid-ewxirvlt>Спільнота.` })} </div> </div> ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Hero.astro", void 0);

const $$Astro$3 = createAstro("https://ecomisto.org");
const $$YoutubeVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$YoutubeVideo;
  const { video } = Astro2.props;
  const { thumbnail, title, videoId } = video;
  return renderTemplate`${maybeRenderHead()}<div class="youtube-video" data-astro-cid-psp4n7jq> <button data-open-modal aria-label="Open youtube video modal" aria-expanded="false" class="open-btn" data-astro-cid-psp4n7jq> ${renderComponent($$result, "Stack", $$Stack, { "space": "space-7", "class": "content-container", "data-astro-cid-psp4n7jq": true }, { "default": ($$result2) => renderTemplate` <div class="img-container" data-astro-cid-psp4n7jq> <!-- <Image src={thumbnail} alt="" width={480} height={360} /> --> <img${addAttribute(thumbnail, "src")} alt="" width="480" height="360" data-astro-cid-psp4n7jq> </div> ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h4", "size": "h6", "class": "title color-secondary text-left", "data-astro-cid-psp4n7jq": true }, { "default": ($$result3) => renderTemplate`${title}` })} ` })} <div class="arrow-right-container" data-astro-cid-psp4n7jq> ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "small", "class": "arrow-right-text", "data-astro-cid-psp4n7jq": true }, { "default": ($$result2) => renderTemplate`Дивитись` })} ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "class": "color-primary arrow-right", "data-astro-cid-psp4n7jq": true })} </div> </button> ${renderComponent($$result, "VideoModal", $$VideoModal, { "data-astro-cid-psp4n7jq": true }, { "default": ($$result2) => renderTemplate` <div class="video-container" data-astro-cid-psp4n7jq> <iframe width="480" height="360"${addAttribute(`https://www.youtube.com/embed/${videoId}`, "src")} loading="lazy" data-astro-cid-psp4n7jq></iframe> </div> ` })} </div>  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/YoutubeVideo.astro", void 0);

const $$Youtube = createComponent(async ($$result, $$props, $$slots) => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = "UCCh0j7kJcOeSmOi2vJDc6Tw";
  let youtubeVideos = [];
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
    );
    const data = await response.json();
    youtubeVideos = data.items.map((item) => {
      return {
        thumbnail: item.snippet.thumbnails.high.url,
        title: parseTitle(item.snippet.title),
        videoId: item.id.videoId
      };
    });
    console.log(youtubeVideos);
  } catch (error) {
    console.log(error);
    console.log("Error fetching youtube videos");
  }
  return renderTemplate`${maybeRenderHead()}<section class="youtube" data-astro-cid-e3qqsibb> ${renderComponent($$result, "Center", $$Center, { "maxWidth": "87.5rem", "space": "space-6", "data-astro-cid-e3qqsibb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-e3qqsibb": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tagName": "h3", "size": "h6", "data-astro-cid-e3qqsibb": true }, { "default": ($$result4) => renderTemplate`Відеоархів` })} ${renderComponent($$result3, "AutoGrid", $$AutoGrid, { "role": "list", "minItemWidth": "265px", "data-astro-cid-e3qqsibb": true }, { "default": ($$result4) => renderTemplate`${youtubeVideos.length === 0 ? renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "data-astro-cid-e3qqsibb": true })}` : youtubeVideos.map((video) => {
    return renderTemplate`<div role="listitem" data-astro-cid-e3qqsibb> ${renderComponent($$result4, "YoutubeVideo", $$YoutubeVideo, { "video": video, "data-astro-cid-e3qqsibb": true })} </div>`;
  })}` })} ` })} ` })} </section> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Youtube.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["marquee", [classList]], "class:list")}${spreadAttributes(rest)}${addAttribute(direction, "data-direction")}${addAttribute(duration, "data-duration")}${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/Marquee.astro", void 0);

const $$Astro$1 = createAstro("https://ecomisto.org");
const $$MyIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
      name: "donors-undp"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="donors" data-astro-cid-ocsizvzk> ${renderComponent($$result, "Center", $$Center, { "maxWidth": "125rem", "space": "space-4", "data-astro-cid-ocsizvzk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-9", "data-astro-cid-ocsizvzk": true }, { "default": ($$result3) => renderTemplate` <div class="title" data-astro-cid-ocsizvzk> ${renderComponent($$result3, "Text", $$Text, { "tagName": "div", "size": "medium", "class": "font-medium", "isBadge": true, "variant": "neutral", "data-astro-cid-ocsizvzk": true }, { "default": ($$result4) => renderTemplate`Донори` })} </div> ${renderComponent($$result3, "Marquee", $$Marquee, { "direction": "left", "space": "space-4", "duration": "slow", "data-astro-cid-ocsizvzk": true }, { "default": ($$result4) => renderTemplate` <div class="donor-logos marquee-inner" data-astro-cid-ocsizvzk> ${donors.map((donor) => {
    return renderTemplate`<div class="donor-logo" data-astro-cid-ocsizvzk> ${renderComponent($$result4, "MyIcon", $$MyIcon, { "name": donor.name, "data-astro-cid-ocsizvzk": true })}  </div>`;
  })} </div> ` })} ` })} ` })}  </section>`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Donors.astro", void 0);

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "partners", "data-astro-cid-pqooy3ar": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-pqooy3ar": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="inner" data-astro-cid-pqooy3ar> ${renderComponent($$result3, "EmptyShape", $$EmptyShape, { "class": "partners-shape", "top": "-1px", "left": "-1px", "data-astro-cid-pqooy3ar": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Shape", $$Shape, { "color": "white", "class": "top", "translateX": "100%", "rotate": "270deg", "data-astro-cid-pqooy3ar": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "white", "class": "bottom", "translateY": "100%", "rotate": "270deg", "data-astro-cid-pqooy3ar": true })} ` })} ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-pqooy3ar": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Row", $$Row, { "data-astro-cid-pqooy3ar": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-6", "class": "col-12 col-start-1 tablet:col-7 tablet:col-start-5 laptop:col-6 laptop:col-start-6", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Text", $$Text, { "tagName": "div", "size": "large", "class": "font-medium", "isBadge": true, "variant": "accent", "data-astro-cid-pqooy3ar": true }, { "default": ($$result7) => renderTemplate`Партнери` })} ${renderComponent($$result6, "Stack", $$Stack, { "space": "space-5", "data-astro-cid-pqooy3ar": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "class": "color-primary font-heading", "data-astro-cid-pqooy3ar": true }, { "default": ($$result9) => renderTemplate`
Запрошуємо до співпраці
` })} ${renderComponent($$result8, "Text", $$Text, { "tagName": "p", "size": "large", "class": "color-accent", "data-astro-cid-pqooy3ar": true }, { "default": ($$result9) => renderTemplate`Ми пропонуємо спільно брати участь у соціальних змінах для
                  впровадження сталих підходів у розвитку міст. Свою місію
                  реалізуємо через урбаністичні інтервенції, освітні програми та
                  соціальне підприємництво. Долучайтесь до нас як волонтер або
                  партнер. Разом ми можемо творити зміни!
` })} ` })} ${renderComponent($$result7, "Button", $$Button, { "style": "primary", "data-open-modal": true, "aria-label": "Open cooperation form modal", "aria-expanded": "false", "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate`Написати
` })} ${renderComponent($$result7, "SideModal", $$SideModal, { "name": "partnership-form", "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "Partnership", $$Partnership, { "data-astro-cid-pqooy3ar": true })} ` })} ` })} ` })} ` })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-8", "data-astro-cid-pqooy3ar": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Marquee", $$Marquee, { "direction": "left", "space": "space-4", "duration": "slow", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` <div class="partner-logos marquee-inner" data-astro-cid-pqooy3ar> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-sendpulse", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-ahalar", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-tolocar", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-u-cycle", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-agenciya", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-chernigiv-it", "data-astro-cid-pqooy3ar": true })} </div> </div> ` })} ${renderComponent($$result5, "Marquee", $$Marquee, { "direction": "right", "space": "space-4", "duration": "slow", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` <div class="partner-logos marquee-inner" data-astro-cid-pqooy3ar> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-mart", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-ostriv", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-politehnika", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-uma", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-zelenew", "data-astro-cid-pqooy3ar": true })} </div> </div> ` })} ` })} ` })} </div> ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Partners.astro", void 0);

const $$ArchiveProjects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects", ({ data }) => !data.isDraft)).filter(({ data }) => !data.isActive);
  const sortedProjects = getSortedProjects(projects);
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-10" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h3", "size": "h5" }, { "default": ($$result3) => renderTemplate`Реалізовані проєкти` })} ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-7" }, { "default": ($$result3) => renderTemplate`${sortedProjects.slice(0, 3).map((project) => {
    return renderTemplate`${renderComponent($$result3, "ArchiveProjectCard", $$ArchiveProjectCard, { "project": project })}`;
  })}` })} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/ArchiveProjects.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "projects", "data-astro-cid-qz6brpfc": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-qz6brpfc": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-qz6brpfc": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Stack", $$Stack, { "space": { default: "space-12", tablet: "space-14", laptop: "space-16" }, "data-astro-cid-qz6brpfc": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "ActiveProjects", $$ActiveProjects, { "data-astro-cid-qz6brpfc": true })} ${renderComponent($$result5, "ArchiveProjects", $$ArchiveProjects, { "data-astro-cid-qz6brpfc": true })} ` })} ${renderComponent($$result4, "ButtonArrow", $$ButtonArrow, { "tagName": "a", "style": "primary", "href": "/projects", "class": "all-projects", "data-astro-cid-qz6brpfc": true }, { "default": ($$result5) => renderTemplate`Усі проєкти
` })} ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/home/Projects.astro", void 0);

const $$Astro = createAstro("https://ecomisto.org");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Donors", $$Donors, {})} ${renderComponent($$result2, "Mission", $$Mission, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Partners", $$Partners, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Youtube", $$Youtube, {})} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/pages/index.astro", void 0);

const $$file = "/Volumes/Media HD/Web Development/ecomisto/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
