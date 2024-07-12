import { a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, d as renderComponent, g as createAstro, e as renderSlot } from './astro/server_BA-ZvcyS.mjs';
import { a as $$Frame, c as $$MyPicture, g as getCollection, b as $$Row } from './MyPicture_CPA3lFgk.mjs';
import { n as $$Link, a as $$Stack, e as $$Cluster, $ as $$Heading, i as $$Text, d as $$Icon, g as getSortedProjects } from './BaseLayout_Ddcqd7CT.mjs';
/* empty css                         */
import { a as $$Image } from './_astro_assets_BlnsgbOM.mjs';

const $$Astro$2 = createAstro();
const $$ActiveProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ActiveProjectCard;
  const { project, class: classList, ...rest } = Astro2.props;
  const { title, description, cover } = project.data;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([classList], "class:list")}${spreadAttributes(rest)} data-astro-cid-enunb7jp> ${renderComponent($$result, "Link", $$Link, { "href": `/projects/${project.slug}`, "class": "wrapper", "data-astro-cid-enunb7jp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-8", "data-astro-cid-enunb7jp": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Frame", $$Frame, { "ratio": "4:3", "class": "img-wrapper", "data-astro-cid-enunb7jp": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": cover, "width": 600, "alt": "", "data-astro-cid-enunb7jp": true })} ` })} ${renderComponent($$result3, "Cluster", $$Cluster, { "noWrap": true, "justify": "between", "alignItems": "baseline", "space": "space-7", "data-astro-cid-enunb7jp": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-3", "data-astro-cid-enunb7jp": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Heading", $$Heading, { "tagName": "h4", "size": "h5", "class": "title font-heading color-secondary", "data-astro-cid-enunb7jp": true }, { "default": ($$result6) => renderTemplate`${title}` })} ${renderComponent($$result5, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-black description", "data-astro-cid-enunb7jp": true }, { "default": ($$result6) => renderTemplate`${description}` })} ` })} ${renderComponent($$result4, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "class": "color-primary", "data-astro-cid-enunb7jp": true })} ` })} ` })} ` })} </article> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ActiveProjectCard.astro", void 0);

const $$ActiveProjects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects", ({ data }) => !data.isDraft)).filter(({ data }) => data.isActive);
  const sortedProjects = getSortedProjects(projects);
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-5lhaoq7t": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "data-astro-cid-5lhaoq7t": true }, { "default": ($$result3) => renderTemplate`Основні проєкти` })} ${renderComponent($$result2, "Row", $$Row, { "columnGap": {
    default: "space-0",
    tablet: "space-4",
    laptop: "space-7"
  }, "rowGap": {
    default: "space-10",
    tablet: "space-12",
    laptop: "space-14"
  }, "class": "active-projects", "data-astro-cid-5lhaoq7t": true }, { "default": ($$result3) => renderTemplate`${sortedProjects.map((project) => {
    return renderTemplate`${renderComponent($$result3, "ActiveProjectCard", $$ActiveProjectCard, { "project": project, "class": "active-project-item col-12 tablet:col-6", "data-astro-cid-5lhaoq7t": true })}`;
  })}` })} ` })}  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ActiveProjects.astro", void 0);

const $$Astro$1 = createAstro();
const $$ButtonArrow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/ButtonArrow.astro", void 0);

const $$Astro = createAstro();
const $$ArchiveProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArchiveProjectCard;
  const { project } = Astro2.props;
  const { title, description, cover, startYear, startMonth, endYear, endMonth } = project.data;
  const isStartYear = startYear === endYear ? "" : startYear;
  const periodString = `${startMonth} ${isStartYear} \u2014 ${endMonth} ${endYear} \u0440.`;
  return renderTemplate`${maybeRenderHead()}<article class="archive-project-item" data-astro-cid-a7rjyiq4> ${renderComponent($$result, "Link", $$Link, { "href": `/projects/${project.slug}`, "data-astro-cid-a7rjyiq4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cluster", $$Cluster, { "class": "wrapper", "alignItems": "center", "space": { default: "space-4", tablet: "space-7" }, "noWrap": true, "data-astro-cid-a7rjyiq4": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Frame", $$Frame, { "ratio": "1:1", "class": "img-wrapper", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Image", $$Image, { "src": cover, "alt": "", "data-astro-cid-a7rjyiq4": true })} ` })} ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-3", "class": "info", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-2", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result5) => renderTemplate` <div class="period" data-astro-cid-a7rjyiq4> ${renderComponent($$result5, "Text", $$Text, { "tagName": "div", "size": "small", "class": "color-secondary font-medium", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result6) => renderTemplate`${periodString}` })} </div> ${renderComponent($$result5, "Heading", $$Heading, { "tagName": "h4", "size": "h6", "class": "title font-heading color-secondary", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result6) => renderTemplate`${title}` })} ` })} ${renderComponent($$result4, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-dark-gray description", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result5) => renderTemplate`${description}` })} ` })} <div class="arrow-right-container" data-astro-cid-a7rjyiq4> <span class="arrow-right-text" data-astro-cid-a7rjyiq4>Дивитись</span> ${renderComponent($$result3, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "class": "color-primary arrow-right", "data-astro-cid-a7rjyiq4": true })} </div> ` })} ` })} </article> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ArchiveProjectCard.astro", void 0);

export { $$ArchiveProjectCard as $, $$ButtonArrow as a, $$ActiveProjects as b };
