import { c as createComponent, e as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_-TgDsRa7.mjs';
import { b as $$Stack, i as $$Icon, c as $$Heading, d as $$Text } from './BaseLayout_D0jnvpW9.mjs';
import { d as $$Row, b as $$MyPicture } from './TimePeriod_eNoZgjin.mjs';
import { $ as $$Centered } from './Centered_GZOambeX.mjs';
import { w as workingHoursData } from './favicon_Cy_h1x3u.mjs';
/* empty css                                                                    */

const workingHoursBg = new Proxy({"src":"/_astro/working-hours_bg.BmrBWQ-z.png","width":2200,"height":322,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/velokuhnya/working-hours_bg.png";
							}
							
							return target[name];
						}
					});

const workingHoursBgMobile = new Proxy({"src":"/_astro/working-hours_bg-mobile.IVKKUzJL.png","width":980,"height":198,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/velokuhnya/working-hours_bg-mobile.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://ecomisto.org");
const $$WorkingHours = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkingHours;
  const currentLocale = Astro2.currentLocale;
  const workingHours = workingHoursData[currentLocale];
  return renderTemplate`${maybeRenderHead()}<div class="working-hours" data-astro-cid-372dsktf> ${renderComponent($$result, "Centered", $$Centered, { "data-astro-cid-372dsktf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": { default: "space-4", tablet: "space-0" }, "data-astro-cid-372dsktf": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Row", $$Row, { "rowGap": { default: "space-10", tablet: "space-0" }, "data-astro-cid-372dsktf": true }, { "default": ($$result4) => renderTemplate` <div class="logo col-12 tablet:col-6" data-astro-cid-372dsktf> ${renderComponent($$result4, "Icon", $$Icon, { "name": "velokuhnya-logo", "data-astro-cid-372dsktf": true })} </div> <div class="info col-12 tablet:col-6" data-astro-cid-372dsktf> ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-8", "data-astro-cid-372dsktf": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-4", "data-astro-cid-372dsktf": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h4", "size": "h6", "data-astro-cid-372dsktf": true }, { "default": ($$result7) => renderTemplate`${unescapeHTML(workingHours.title)}` })} ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h4", "size": "h6", "data-astro-cid-372dsktf": true }, { "default": ($$result7) => renderTemplate`11:00 - 17:00` })} ` })} ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-1", "data-astro-cid-372dsktf": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Text", $$Text, { "tagName": "p", "size": "medium", "data-astro-cid-372dsktf": true }, { "default": ($$result7) => renderTemplate`${workingHours.adress}` })} ${renderComponent($$result6, "Text", $$Text, { "tagName": "p", "size": "medium", "data-astro-cid-372dsktf": true }, { "default": ($$result7) => renderTemplate`${workingHours.place}` })} ` })} ` })} </div> ` })} ${renderComponent($$result3, "Row", $$Row, { "data-astro-cid-372dsktf": true }, { "default": ($$result4) => renderTemplate` <div class="collage col-12" data-astro-cid-372dsktf> ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": workingHoursBgMobile, "width": 490, "alt": "Peremoha Center Collage", "class": "mobile", "data-astro-cid-372dsktf": true })} ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": workingHoursBg, "width": 1100, "alt": "Peremoha Center Collage", "class": "desktop", "data-astro-cid-372dsktf": true })} </div> ` })} ` })} ` })} </div> `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/project/WorkingHours.astro", void 0);

const bikesForUkraine = new Proxy({"src":"/_astro/bikes-for-ukraine.De7IBfbR.png","width":2400,"height":3200,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/images/velokuhnya/bikes-for-ukraine.png";
							}
							
							return target[name];
						}
					});

export { $$WorkingHours as $, bikesForUkraine as b };
