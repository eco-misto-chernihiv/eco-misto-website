import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_-TgDsRa7.mjs';

const frontmatter = {
  "id": "maysternya-mista",
  "title": "City Workshop",
  "description": "A crowdfunding platform in Chernihiv that supports your ideas to improve the quality and comfort of urban public spaces.",
  "pubDate": "2999-01-01T00:00:00.000Z",
  "cover": {
    "image": "../images/maysternya-mista/cover_maysternya-mista.png",
    "alt": "Опис"
  },
  "isActive": true,
  "isCollage": true
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const {TextContent} = props.components || ({});
  if (!TextContent) _missingMdxReference("TextContent");
  return createVNode(TextContent, {
    children: "Текст оновлюється."
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/projects/en/maysternya-mista.mdx";
const file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/maysternya-mista.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/maysternya-mista.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
