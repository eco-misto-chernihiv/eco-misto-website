import { e as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_-TgDsRa7.mjs';
import { g as getProjectIdWithoutLang, $ as $$ProjectCard, a as $$Frame, b as $$MyPicture, c as getCollection, d as $$Row, e as $$TimePeriod } from './TimePeriod_eNoZgjin.mjs';
import { a as getSortedProjects, b as getTimePeriod } from './helpers_CRk732sB.mjs';
import { g as getRelativeLocaleUrl, f as $$Link, b as $$Stack, h as $$Cluster, c as $$Heading, d as $$Text, i as $$Icon } from './BaseLayout_D0jnvpW9.mjs';
/* empty css                         */
import { $ as $$Image } from './internal_CSE0eue_.mjs';
import { b as buttonsData } from './favicon_Cy_h1x3u.mjs';

const $$Astro$2 = createAstro("https://ecomisto.org");
const $$ActiveProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ActiveProjectCard;
  const { project, class: classList, ...rest } = Astro2.props;
  const { title, description, cover } = project.data;
  const projectId = getProjectIdWithoutLang(project.id);
  const currentLocale = Astro2.currentLocale;
  const siteUrl = projectId === "maysternya-mista" ? "https://crowdfunding.ecomisto.org/" : getRelativeLocaleUrl(currentLocale, `/projects/${projectId}`);
  return renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "class:list": ["active-project", classList], ...rest, "data-astro-cid-enunb7jp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "href": siteUrl, ...projectId === "maysternya-mista" ? { isExternal: true, target: "_blank" } : "", "data-astro-cid-enunb7jp": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-8", "data-astro-cid-enunb7jp": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Frame", $$Frame, { "ratio": "4:3", "class": "cover-wrapper", "data-astro-cid-enunb7jp": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MyPicture", $$MyPicture, { "src": cover.image, "width": 600, "alt": "", "data-astro-cid-enunb7jp": true })} ` })} ${renderComponent($$result4, "Cluster", $$Cluster, { "noWrap": true, "justify": "between", "alignItems": "baseline", "space": "space-7", "data-astro-cid-enunb7jp": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-3", "data-astro-cid-enunb7jp": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h4", "size": "h5", "class": "title font-heading color-secondary", "data-astro-cid-enunb7jp": true }, { "default": ($$result7) => renderTemplate`${title}` })} ${renderComponent($$result6, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-black description", "data-astro-cid-enunb7jp": true }, { "default": ($$result7) => renderTemplate`${description}` })} ` })} ${renderComponent($$result5, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "class": "color-primary", "data-astro-cid-enunb7jp": true })} ` })} ` })} ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ActiveProjectCard.astro", void 0);

const $$Astro$1 = createAstro("https://ecomisto.org");
const $$ActiveProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ActiveProjects;
  const currentLocale = Astro2.currentLocale;
  const projects = (await getCollection("projects", ({ data }) => !data.isDraft)).filter(({ data }) => data.isActive).filter((project) => project.id.startsWith(currentLocale));
  const sortedProjects = getSortedProjects(projects);
  const title = currentLocale === "uk" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0456 \u043F\u0440\u043E\u0454\u043A\u0442\u0438" : "Ongoing projects";
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-5lhaoq7t": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h3", "size": "h6", "class": "color-secondary", "data-astro-cid-5lhaoq7t": true }, { "default": async ($$result3) => renderTemplate`${title}` })} ${renderComponent($$result2, "Row", $$Row, { "columnGap": {
    default: "space-0",
    tablet: "space-4",
    laptop: "space-7"
  }, "rowGap": {
    default: "space-10",
    tablet: "space-12",
    laptop: "space-14"
  }, "class": "active-projects", "data-astro-cid-5lhaoq7t": true }, { "default": async ($$result3) => renderTemplate`${sortedProjects.map((project) => {
    return renderTemplate`${renderComponent($$result3, "ActiveProjectCard", $$ActiveProjectCard, { "project": project, "class": "col-12 tablet:col-6", "data-active-project": true, "data-astro-cid-5lhaoq7t": true })}`;
  })}` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ActiveProjects.astro", void 0);

const $$Astro = createAstro("https://ecomisto.org");
const $$ArchiveProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArchiveProjectCard;
  const { project } = Astro2.props;
  const { title, description, cover, period } = project.data;
  const projectId = getProjectIdWithoutLang(project.id);
  if (!period) throw new Error(`Period is missing for project: ${projectId}`);
  const timePeriod = getTimePeriod(period);
  const currentLocale = Astro2.currentLocale;
  const buttons = buttonsData[currentLocale];
  return renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "class": "archive-project", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "href": getRelativeLocaleUrl(currentLocale, `/projects/${projectId}`), "data-astro-cid-a7rjyiq4": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Cluster", $$Cluster, { "class": "wrapper", "alignItems": "center", "space": { default: "space-4", tablet: "space-7" }, "noWrap": true, "data-astro-cid-a7rjyiq4": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Frame", $$Frame, { "ratio": "1:1", "class": "img-wrapper", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Image", $$Image, { "src": cover.image, "alt": cover.alt, "data-astro-cid-a7rjyiq4": true })} ` })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-3", "class": "info", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-2", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "TimePeriod", $$TimePeriod, { "data-astro-cid-a7rjyiq4": true }, { "default": ($$result7) => renderTemplate`${timePeriod}` })} ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h4", "size": "h6", "class": "title font-heading color-secondary", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result7) => renderTemplate`${title}` })} ` })} ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-dark-gray description", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result6) => renderTemplate`${description}` })} ` })} ${maybeRenderHead()}<div class="arrow-right-container" data-astro-cid-a7rjyiq4> <span class="arrow-right-text" data-astro-cid-a7rjyiq4>${buttons.view}</span> ${renderComponent($$result4, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "class": "color-primary arrow-right", "data-astro-cid-a7rjyiq4": true })} </div> ` })} ` })} ` })} `;
}, "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/components/ArchiveProjectCard.astro", void 0);

export { $$ArchiveProjectCard as $, $$ActiveProjects as a };
