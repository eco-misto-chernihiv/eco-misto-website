import { a as createComponent, h as defineStyleVars, b as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, d as renderComponent, g as createAstro, e as renderSlot } from './astro/server_BA-ZvcyS.mjs';
import { b as $$Frame, d as $$MyPicture, g as getCollection, c as $$Row } from './AutoGrid_Bk4q0PLS.mjs';
import { l as $$Link, a as $$Stack, $ as $$Heading, g as $$Text, d as $$Icon } from './BaseLayout_oBDNaKon.mjs';
/* empty css                         */

const $$Astro$2 = createAstro();
const $$ActiveProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ActiveProjectCard;
  const { project, class: classList, ...rest } = Astro2.props;
  const { title, description, cover, color = "accent" } = project.data;
  const backgroundColor = `var(--color-${color})`;
  const $$definedVars = defineStyleVars([{ backgroundColor }]);
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([classList], "class:list")}${spreadAttributes(rest)} data-astro-cid-enunb7jp${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Link", $$Link, { "href": `/projects/${project.slug}`, "class": "wrapper", "data-astro-cid-enunb7jp": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-8", "data-astro-cid-enunb7jp": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Frame", $$Frame, { "ratio": "4:3", "class": "img-wrapper", "data-astro-cid-enunb7jp": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": cover, "width": 600, "alt": "", "data-astro-cid-enunb7jp": true })} ` })} ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-3", "data-astro-cid-enunb7jp": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h4", "size": "h5", "class": "title font-heading color-secondary", "data-astro-cid-enunb7jp": true }, { "default": ($$result5) => renderTemplate`${title}` })} ${renderComponent($$result4, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-black description", "data-astro-cid-enunb7jp": true }, { "default": ($$result5) => renderTemplate`${description}` })} ` })} ` })} ` })} </article> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ActiveProjectCard.astro", void 0);

const $$ActiveProjects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects", ({ data }) => !data.isDraft);
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-5lhaoq7t": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "data-astro-cid-5lhaoq7t": true }, { "default": ($$result3) => renderTemplate`Основні проєкти` })} ${renderComponent($$result2, "Row", $$Row, { "columnGap": {
    default: "space-0",
    tablet: "space-4",
    laptop: "space-7"
  }, "rowGap": {
    default: "space-10",
    tablet: "space-12",
    laptop: "space-14"
  }, "class": "active-projects", "data-astro-cid-5lhaoq7t": true }, { "default": ($$result3) => renderTemplate`${projects.filter(({ data }) => data.isActive).map((project) => {
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
  const { title, description, cover } = project.data;
  return renderTemplate`${maybeRenderHead()}<article class="archive-project-item" data-astro-cid-a7rjyiq4> ${renderComponent($$result, "Link", $$Link, { "href": `/projects/${project.slug}`, "data-astro-cid-a7rjyiq4": true }, { "default": ($$result2) => renderTemplate` <div class="wrapper" data-astro-cid-a7rjyiq4> ${renderComponent($$result2, "Stack", $$Stack, { "space": "space-7", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Frame", $$Frame, { "ratio": "16:9", "class": "img-wrapper", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "MyPicture", $$MyPicture, { "src": cover, "width": 680, "alt": "", "data-astro-cid-a7rjyiq4": true })} ` })} ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-2", "class": "info", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h4", "size": { default: "h6" }, "class": "title font-heading color-secondary", "data-astro-cid-a7rjyiq4": true }, { "default": ($$result5) => renderTemplate`${title}` })} ` })} ` })} </div> ` })} </article> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ArchiveProjectCard.astro", void 0);

export { $$ArchiveProjectCard as $, $$ButtonArrow as a, $$ActiveProjects as b };
