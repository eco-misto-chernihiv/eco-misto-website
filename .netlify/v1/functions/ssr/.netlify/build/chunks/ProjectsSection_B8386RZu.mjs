import { e as createAstro, c as createComponent, m as maybeRenderHead, k as addAttribute, r as renderComponent, a as renderTemplate, b as renderSlot, f as renderScript, F as Fragment } from './astro/server_-TgDsRa7.mjs';
import { j as $$Shape, c as $$Heading, d as $$Text, $ as $$Center, b as $$Stack, e as $$Button, i as $$Icon, g as getRelativeLocaleUrl } from './BaseLayout_D0jnvpW9.mjs';
import { f as $$Section, b as $$MyPicture, d as $$Row, a as $$Frame, c as getCollection } from './TimePeriod_eNoZgjin.mjs';
/* empty css                         */
import { d as achievmentsData, m as missionData, p as partnersData, b as buttonsData } from './favicon_Cy_h1x3u.mjs';
/* empty css                         */
import { p as parseTitle, a as getSortedProjects } from './helpers_CRk732sB.mjs';
import { b as $$AutoGrid, c as $$Marquee, d as $$EmptyShape, e as $$ButtonArrow } from './ButtonArrow_BEiG401b.mjs';
import { g as gizLogo } from './giz_4WortYbu.mjs';
import { $ as $$ArchiveProjectCard, a as $$ActiveProjects } from './ArchiveProjectCard_q3Nxc9Vn.mjs';

const $$Astro$b = createAstro("https://ecomisto.org");
const $$Achievment = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["achievment", id], "class:list")} data-astro-cid-yanjpqo6> ${renderComponent($$result, "Shape", $$Shape, { "color": "secondary", "class": "left", "translateX": leftTranslateX, "rotate": leftRotate, "data-astro-cid-yanjpqo6": true })} ${renderComponent($$result, "Shape", $$Shape, { "color": "secondary", "class": "right", "translateX": rightTranslateX, "rotate": rightRotate, "data-astro-cid-yanjpqo6": true })} <div class="content" data-astro-cid-yanjpqo6> ${renderComponent($$result, "Heading", $$Heading, { "tagName": "h4", "size": { default: "h6", tablet: "h5", laptop: "h3" }, "class": "numner font-heading", "data-astro-cid-yanjpqo6": true }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderComponent($$result, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "description", "data-astro-cid-yanjpqo6": true }, { "default": ($$result2) => renderTemplate`${description}` })} </div> </div> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Achievment.astro", void 0);

const achievmentsBg = new Proxy({"src":"/_astro/achievments-bg-final.CgPE6Tpw.jpg","width":2800,"height":1200,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/achievments-bg-final.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$a = createAstro("https://ecomisto.org");
const $$Achievments = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Achievments;
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "achievments", "data-astro-cid-hjhrmcmx": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-hjhrmcmx": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="achievments-container" data-astro-cid-hjhrmcmx> <div class="bg-image" data-astro-cid-hjhrmcmx> ${renderComponent($$result3, "MyPicture", $$MyPicture, { "src": achievmentsBg, "width": 1400, "alt": "", "data-astro-cid-hjhrmcmx": true })} </div> <div class="achievments-inner" data-astro-cid-hjhrmcmx> ${achievmentsData[currentLocale].map((achievment) => renderTemplate`${renderComponent($$result3, "Achievment", $$Achievment, { "achievment": achievment, "data-astro-cid-hjhrmcmx": true })}`)} </div> </div> ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Achievments.astro", void 0);

const $$Astro$9 = createAstro("https://ecomisto.org");
const $$Mission = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Mission;
  const currentLocale = Astro2.currentLocale;
  const mission = missionData[currentLocale];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "color": "secondary", "isRound": true, "class": "mission", "data-astro-cid-mum6lvxz": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": { default: "space-10", tablet: "space-12" }, "data-astro-cid-mum6lvxz": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-mum6lvxz": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Row", $$Row, { "data-astro-cid-mum6lvxz": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-4", "class": "col-12 tablet:col-9 laptop:col-8", "data-astro-cid-mum6lvxz": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Text", $$Text, { "tagName": "div", "size": "large", "class": "font-medium", "variant": "accent", "isBadge": true, "data-astro-cid-mum6lvxz": true }, { "default": ($$result7) => renderTemplate`${mission.tag}` })} ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h3", "size": "h4", "class": "mission-text color-primary font-heading", "data-astro-cid-mum6lvxz": true }, { "default": ($$result7) => renderTemplate`${mission.text}` })} ` })} ` })} ` })} ${renderComponent($$result3, "Achievments", $$Achievments, { "data-astro-cid-mum6lvxz": true })} ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Mission.astro", void 0);

const $$Astro$8 = createAstro("https://ecomisto.org");
const $$TeamMember = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TeamMember;
  const { member } = Astro2.props;
  const { name, position, picture } = member.data;
  return renderTemplate`${maybeRenderHead()}<figure class="team-member" data-astro-cid-siaceyfv> ${renderComponent($$result, "Frame", $$Frame, { "ratio": "3:4", "class": "member-photo", "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MyPicture", $$MyPicture, { "src": picture, "alt": "", "width": 450, "data-astro-cid-siaceyfv": true })} ` })} <figcaption class="member-info" data-astro-cid-siaceyfv> <div class="wrapper" data-astro-cid-siaceyfv> ${renderComponent($$result, "Shape", $$Shape, { "color": "white", "class": "top", "translateY": "-100%", "rotate": "180deg", "data-astro-cid-siaceyfv": true })} ${renderComponent($$result, "Shape", $$Shape, { "color": "white", "class": "right", "translateX": "100%", "rotate": "180deg", "data-astro-cid-siaceyfv": true })} <div class="info" data-astro-cid-siaceyfv> ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "medium", "isBolded": true, "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate`${name}` })} ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "small", "class": "position", "data-astro-cid-siaceyfv": true }, { "default": ($$result2) => renderTemplate`${position}` })} </div> </div> </figcaption> </figure> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/TeamMember.astro", void 0);

const heroImg = new Proxy({"src":"/_astro/hero2.BBVvcogS.jpg","width":1700,"height":1135,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/hero2.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://ecomisto.org");
const $$VideoDialog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$VideoDialog;
  const { class: classList, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<dialog${addAttribute([classList], "class:list")}${addAttribute(name, "data-dialog")} data-astro-cid-q2xwx3hn> ${renderComponent($$result, "Button", $$Button, { "variant": "icon", "style": "ghost", "aria-label": `Close ${name}`, "isDefault": false, "data-close-dialog": true, "data-astro-cid-q2xwx3hn": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-close", "size": 32, "data-astro-cid-q2xwx3hn": true })} <span class="sr-only" data-astro-cid-q2xwx3hn>${`Close ${name}`}</span> ` })} <div class="video-container" data-astro-cid-q2xwx3hn> ${renderSlot($$result, $$slots["default"])} </div> </dialog> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/VideoDialog.astro", void 0);

const $$Astro$6 = createAstro("https://ecomisto.org");
const $$YoutubeVideo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$YoutubeVideo;
  const { video } = Astro2.props;
  const { thumbnail, title, videoId } = video;
  return renderTemplate`${maybeRenderHead()}<div class="youtube-video" data-astro-cid-psp4n7jq> <button data-open-youtube aria-label="Open youtube video modal" class="open-btn" data-astro-cid-psp4n7jq> ${renderComponent($$result, "Stack", $$Stack, { "space": "space-7", "class": "content-container", "data-astro-cid-psp4n7jq": true }, { "default": ($$result2) => renderTemplate` <div class="img-container" data-astro-cid-psp4n7jq> <!-- <Image src={thumbnail} alt="" width={480} height={360} /> --> <img${addAttribute(thumbnail, "src")} alt="" width="480" height="360" data-astro-cid-psp4n7jq> </div> ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h4", "size": "h6", "class": "title color-secondary text-left", "data-astro-cid-psp4n7jq": true }, { "default": ($$result3) => renderTemplate`${title}` })} ` })} <div class="arrow-right-container" data-astro-cid-psp4n7jq> ${renderComponent($$result, "Text", $$Text, { "tagName": "span", "size": "small", "class": "arrow-right-text", "data-astro-cid-psp4n7jq": true }, { "default": ($$result2) => renderTemplate`Дивитись` })} ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "class": "color-primary arrow-right", "data-astro-cid-psp4n7jq": true })} </div> </button> ${renderComponent($$result, "VideoDialog", $$VideoDialog, { "name": "youtube-video", "data-astro-cid-psp4n7jq": true }, { "default": ($$result2) => renderTemplate` <iframe width="480" height="360"${addAttribute(`https://www.youtube.com/embed/${videoId}`, "src")} loading="lazy" data-astro-cid-psp4n7jq></iframe> ` })} <!-- <VideoModal>
    <div class="video-container">
      <iframe
        width="480"
        height="360"
        src={\`https://www.youtube.com/embed/\${videoId}\`}
        loading="lazy"></iframe>
    </div>
  </VideoModal> --> </div>  ${renderScript($$result, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/YoutubeVideo.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/YoutubeVideo.astro", void 0);

const $$Astro$5 = createAstro("https://ecomisto.org");
const $$Youtube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Youtube;
  const currentLocale = Astro2.currentLocale;
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = "UCCh0j7kJcOeSmOi2vJDc6Tw";
  let youtubeVideos = [];
  try {
    const request = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`
    );
    if (!request.ok) {
      console.error("Youtube API request failed", {
        status: request.status,
        message: request.statusText
      });
      throw new Error("There was a problem with the server youtube api.");
    }
    const data = await request.json();
    youtubeVideos = data.items.map((item) => {
      return {
        thumbnail: item.snippet.thumbnails.high.url,
        title: parseTitle(item.snippet.title),
        videoId: item.id.videoId
      };
    });
  } catch (error) {
    console.error(error);
    console.error("Error fetching youtube videos");
  }
  return renderTemplate`${maybeRenderHead()}<section class="youtube" data-astro-cid-e3qqsibb> ${renderComponent($$result, "Center", $$Center, { "maxWidth": "87.5rem", "space": "space-6", "data-astro-cid-e3qqsibb": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h3", "size": "h6", "class": "color-secondary", "data-astro-cid-e3qqsibb": true }, { "default": async ($$result3) => renderTemplate`${currentLocale === "uk" ? "\u0412\u0456\u0434\u0435\u043E\u0430\u0440\u0445\u0456\u0432" : "Video archive"}` })} ${renderComponent($$result2, "AutoGrid", $$AutoGrid, { "class": "youtube-list", "role": "list", "minItemWidth": "265px", "data-astro-cid-e3qqsibb": true }, { "default": async ($$result3) => renderTemplate`${youtubeVideos.length === 0 ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "data-astro-cid-e3qqsibb": true })}` : youtubeVideos.map((video) => {
    return renderTemplate`<div role="listitem" data-astro-cid-e3qqsibb> ${renderComponent($$result3, "YoutubeVideo", $$YoutubeVideo, { "video": video, "data-astro-cid-e3qqsibb": true })} </div>`;
  })}` })} ` })} </section> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Youtube.astro", void 0);

const $$Astro$4 = createAstro("https://ecomisto.org");
const $$MyIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MyIcon;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg> <use${addAttribute(`/sprite.svg#${name}`, "href")}></use> </svg>`;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ui/MyIcon.astro", void 0);

const $$Astro$3 = createAstro("https://ecomisto.org");
const $$Donors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Donors;
  const donors = [
    {
      name: "donors-usaid-figma"
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
    },
    {
      name: "logo-pcsc"
    }
  ];
  const currentLocale = Astro2.currentLocale;
  return renderTemplate`${maybeRenderHead()}<section class="donors" data-astro-cid-ocsizvzk> ${renderComponent($$result, "Center", $$Center, { "maxWidth": "125rem", "space": "space-4", "data-astro-cid-ocsizvzk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-9", "data-astro-cid-ocsizvzk": true }, { "default": ($$result3) => renderTemplate` <div class="title" data-astro-cid-ocsizvzk> ${renderComponent($$result3, "Text", $$Text, { "tagName": "div", "size": "medium", "class": "font-medium", "isBadge": true, "variant": "neutral", "data-astro-cid-ocsizvzk": true }, { "default": ($$result4) => renderTemplate`${currentLocale === "uk" ? "\u041D\u0430\u043C \u0434\u043E\u0432\u0456\u0440\u044F\u044E\u0442\u044C" : "Trusted by"}` })} </div> ${renderComponent($$result3, "Marquee", $$Marquee, { "direction": "left", "space": "space-4", "duration": "slow", "data-astro-cid-ocsizvzk": true }, { "default": ($$result4) => renderTemplate` <div class="donor-logos marquee-inner" data-astro-cid-ocsizvzk> ${donors.map((donor) => {
    return renderTemplate`<div class="donor-logo" data-astro-cid-ocsizvzk> ${renderComponent($$result4, "MyIcon", $$MyIcon, { "name": donor.name, "data-astro-cid-ocsizvzk": true })}  </div>`;
  })} <div class="donor-logo" data-astro-cid-ocsizvzk> ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": gizLogo, "width": 300, "alt": "GIZ logo", "data-astro-cid-ocsizvzk": true })} </div> </div> ` })} ` })} ` })}  </section>`;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Donors.astro", void 0);

const chernigivMonumentalism = new Proxy({"src":"/_astro/chernigiv-monumentalism.DwttDTud.png","width":1200,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/chernigiv-monumentalism.png";
							}
							
							return target[name];
						}
					});

const chernigivPatrolPolice = new Proxy({"src":"/_astro/chernigiv-patrol-police.ChpMLxg7.png","width":1200,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/images/chernigiv-patrol-police.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://ecomisto.org");
const $$Partners = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Partners;
  const currentLocale = Astro2.currentLocale;
  const partners = partnersData[currentLocale];
  const buttons = buttonsData[currentLocale];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "partners", "data-astro-cid-pqooy3ar": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-pqooy3ar": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="inner" data-astro-cid-pqooy3ar> ${renderComponent($$result3, "EmptyShape", $$EmptyShape, { "class": "partners-shape", "top": "-1px", "left": "-1px", "data-astro-cid-pqooy3ar": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Shape", $$Shape, { "color": "white", "class": "top", "translateX": "100%", "rotate": "270deg", "data-astro-cid-pqooy3ar": true })} ${renderComponent($$result4, "Shape", $$Shape, { "color": "white", "class": "bottom", "translateY": "100%", "rotate": "270deg", "data-astro-cid-pqooy3ar": true })} ` })} ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-pqooy3ar": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Row", $$Row, { "data-astro-cid-pqooy3ar": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-6", "class": "col-12 col-start-1 tablet:col-7 tablet:col-start-5 laptop:col-6 laptop:col-start-6", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Text", $$Text, { "tagName": "div", "size": "large", "class": "font-medium", "isBadge": true, "variant": "accent", "data-astro-cid-pqooy3ar": true }, { "default": ($$result7) => renderTemplate`${partners.tag}` })} ${renderComponent($$result6, "Stack", $$Stack, { "space": "space-5", "data-astro-cid-pqooy3ar": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate` ${renderComponent($$result8, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "class": "color-primary font-heading", "data-astro-cid-pqooy3ar": true }, { "default": ($$result9) => renderTemplate`${partners.title}` })} ${renderComponent($$result8, "Text", $$Text, { "tagName": "p", "size": "large", "class": "color-accent", "data-astro-cid-pqooy3ar": true }, { "default": ($$result9) => renderTemplate`${partners.text}` })} ` })} ${renderComponent($$result7, "Button", $$Button, { "style": "primary", "data-open-partnership": true, "aria-label": "Open cooperation form modal", "data-astro-cid-pqooy3ar": true }, { "default": ($$result8) => renderTemplate`${buttons.contact}` })} ` })} ` })} ` })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-8", "data-astro-cid-pqooy3ar": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Marquee", $$Marquee, { "direction": "left", "space": "space-4", "duration": "slow", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` <div class="partner-logos marquee-inner" data-astro-cid-pqooy3ar> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-sendpulse", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-ahalar", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-dmch", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-tolocar", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-u-cycle", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-agenciya", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-chernigiv-it", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyPicture", $$MyPicture, { "src": chernigivMonumentalism, "width": 300, "alt": "Chernigiv Monumentalism logo", "data-astro-cid-pqooy3ar": true })} </div> </div> ` })} ${renderComponent($$result5, "Marquee", $$Marquee, { "direction": "right", "space": "space-4", "duration": "slow", "data-astro-cid-pqooy3ar": true }, { "default": ($$result6) => renderTemplate` <div class="partner-logos marquee-inner" data-astro-cid-pqooy3ar> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-mart", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-ostriv", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-politehnika", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-uma", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-zelenew", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-ecovisio", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyIcon", $$MyIcon, { "name": "partners-plato", "data-astro-cid-pqooy3ar": true })} </div> <div class="partner-logo" data-astro-cid-pqooy3ar> ${renderComponent($$result6, "MyPicture", $$MyPicture, { "src": chernigivPatrolPolice, "width": 300, "alt": "Chernigiv Patrol Police logo", "data-astro-cid-pqooy3ar": true })} </div> </div> ` })} ` })} ` })} </div> ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/Partners.astro", void 0);

const $$Astro$1 = createAstro("https://ecomisto.org");
const $$ArchiveProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArchiveProjects;
  const currentLocale = Astro2.currentLocale;
  const projects = (await getCollection("projects", ({ data }) => !data.isDraft)).filter(({ data }) => !data.isActive).filter((project) => project.id.startsWith(currentLocale));
  const sortedProjects = getSortedProjects(projects);
  const title = currentLocale === "uk" ? "\u0420\u0435\u0430\u043B\u0456\u0437\u043E\u0432\u0430\u043D\u0456 \u043F\u0440\u043E\u0435\u043A\u0442\u0438" : "Completed projects";
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-10" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h3", "size": "h6", "class": "color-secondary" }, { "default": async ($$result3) => renderTemplate`${title}` })} ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-7" }, { "default": async ($$result3) => renderTemplate`${sortedProjects.slice(0, 3).map((project) => {
    return renderTemplate`${renderComponent($$result3, "ArchiveProjectCard", $$ArchiveProjectCard, { "project": project })}`;
  })}` })} ` })}`;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/ArchiveProjects.astro", void 0);

const $$Astro = createAstro("https://ecomisto.org");
const $$ProjectsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectsSection;
  const currentLocale = Astro2.currentLocale;
  const buttons = buttonsData[currentLocale];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "class": "projects", "data-astro-cid-lr4jdg5l": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-lr4jdg5l": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-lr4jdg5l": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Stack", $$Stack, { "space": { default: "space-12", tablet: "space-14", laptop: "space-16" }, "data-astro-cid-lr4jdg5l": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "ActiveProjects", $$ActiveProjects, { "data-astro-cid-lr4jdg5l": true })} ${renderComponent($$result5, "ArchiveProjects", $$ArchiveProjects, { "data-astro-cid-lr4jdg5l": true })} ` })} ${renderComponent($$result4, "ButtonArrow", $$ButtonArrow, { "tagName": "a", "style": "secondary", "href": `${getRelativeLocaleUrl(currentLocale, "/projects")}`, "class": "all-projects", "data-astro-cid-lr4jdg5l": true }, { "default": ($$result5) => renderTemplate`${buttons.allProjects}` })} ` })} ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/home/ProjectsSection.astro", void 0);

export { $$TeamMember as $, $$VideoDialog as a, $$Donors as b, $$Mission as c, $$ProjectsSection as d, $$Partners as e, $$Youtube as f, heroImg as h };
