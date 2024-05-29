import { q as Fragment, _ as __astro_tag_component__, x as createVNode } from './astro_UArVnpDr.mjs';
import { $ as $$Image } from './pages/generic_BveTtuLk.mjs';

const frontmatter = {
  "title": "Go Bike Chernihiv",
  "description": "опис простору",
  "pubDate": "2024-05-09T00:00:00.000Z",
  "cover": "./images/tolocar_021.jpg",
  "isActive": false
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

const url = "src/content/projects/go-bike-chernihiv.mdx";
const file = "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/go-bike-chernihiv.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/go-bike-chernihiv.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
