import { F as Fragment, _ as __astro_tag_component__, c as createVNode } from './astro/server_BrDdyJt0.mjs';
import { a as $$Image } from './_astro_assets_DNuF3GO3.mjs';

const frontmatter = {
  "title": "Plastic Fantastic",
  "description": "Майстерня та бренд, що досліджують процеси переробки вторинного пластику і популяризують його використання як ресурсу для предметного дизайну.",
  "pubDate": "2024-05-12T00:00:00.000Z",
  "cover": "./images/velokuhnya.png",
  "isActive": true,
  "isCollage": true
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "heading",
    "text": "Heading"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "heading",
      children: "Heading"
    }), "\n", createVNode(_components.p, {
      children: "Some text"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/projects/plastic-fantastic.mdx";
const file = "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plastic-fantastic.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/plastic-fantastic.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
