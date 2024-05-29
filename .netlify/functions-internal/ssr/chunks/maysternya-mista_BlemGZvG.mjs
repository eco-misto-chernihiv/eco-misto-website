import { e as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent, h as createAstro, j as renderSlot, q as Fragment, _ as __astro_tag_component__, x as createVNode } from './astro_UArVnpDr.mjs';
import { $ as $$Image } from './pages/generic_BveTtuLk.mjs';
import { $ as $$Frame, a as $$Cluster, b as $$ArrowIcon, c as $$Center, d as $$EmptyShape, e as $$Shape } from './prerender_BDmDLCIk.mjs';
/* empty css                                                               */
/* empty css                                                                  */
/* empty css                                                                        */

const $$Astro = createAstro();
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { imagePaths } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/content/projects/images/maysternya-mista/maysternya_mista_001.jpg": () => import('./maysternya_mista_001_BtVqWjXu.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_002.jpg": () => import('./maysternya_mista_002_BHiFjPeM.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_003.jpg": () => import('./maysternya_mista_003_CHSwhMzx.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_004.jpg": () => import('./maysternya_mista_004_BAzuMu11.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_005.jpg": () => import('./maysternya_mista_005_DOOcQ7Kw.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_006.jpg": () => import('./maysternya_mista_006_qDA7CrsG.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_007.jpg": () => import('./maysternya_mista_007_BPduiMbb.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_008.jpg": () => import('./maysternya_mista_008_DS_0kQk9.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_009.jpg": () => import('./maysternya_mista_009_BqByNjzZ.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_010.jpg": () => import('./maysternya_mista_010_DGnxUHXc.mjs'),"/src/content/projects/images/maysternya-mista/maysternya_mista_011.jpg": () => import('./maysternya_mista_011_CXViLPf5.mjs'),"/src/content/projects/images/tolocar_021.jpg": () => import('./tolocar_021_CwnBcJTI.mjs')

});
  imagePaths.forEach((imagePath) => {
    const newPath = `/src/content/projects/${imagePath}`;
    if (!images[newPath])
      throw new Error(
        `"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`
      );
  });
  return renderTemplate`${maybeRenderHead()}<section class="gallery" data-astro-cid-fb5e2kpw> <div class="swiper" data-astro-cid-fb5e2kpw> <div class="swiper-wrapper" data-astro-cid-fb5e2kpw> ${imagePaths?.map((imagePath) => {
    const newPath = `/src/content/projects/${imagePath}`;
    return renderTemplate`<div class="swiper-slide" data-astro-cid-fb5e2kpw> ${renderComponent($$result, "Frame", $$Frame, { "ratio": "3:2", "class": "img-wrapper", "data-astro-cid-fb5e2kpw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[newPath](), "alt": "", "data-astro-cid-fb5e2kpw": true })} ` })} </div>`;
  })} </div> <div class="swiper-navigation" data-astro-cid-fb5e2kpw> ${renderComponent($$result, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7" }, "data-astro-cid-fb5e2kpw": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cluster", $$Cluster, { "space": "space-10", "alignItems": "center", "noWrap": true, "data-astro-cid-fb5e2kpw": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Cluster", $$Cluster, { "alignItems": "center", "noWrap": true, "class": "swiper-pagination-wrapper", "data-astro-cid-fb5e2kpw": true }, { "default": ($$result4) => renderTemplate` <div class="swiper-pagination" data-astro-cid-fb5e2kpw></div> <div class="round-corner" data-astro-cid-fb5e2kpw></div> ` })} <div class="swiper-buttons" data-astro-cid-fb5e2kpw> <div class="swiper-button swiper-button-prev" data-astro-cid-fb5e2kpw> ${renderComponent($$result3, "ArrowIcon", $$ArrowIcon, { "style": "primary", "direction": "left", "class": "swiper-button", "data-astro-cid-fb5e2kpw": true })} </div> <div class="swiper-button swiper-button-next" data-astro-cid-fb5e2kpw> ${renderComponent($$result3, "ArrowIcon", $$ArrowIcon, { "style": "primary", "data-astro-cid-fb5e2kpw": true })} </div> </div> ` })} ` })} </div> </div> </section>  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Gallery.astro", void 0);

const $$Blockquote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7" }, "data-astro-cid-e7sszx3b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<blockquote data-astro-cid-e7sszx3b> ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "62.5rem", "space": "space-7", "data-astro-cid-e7sszx3b": true }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} ${renderComponent($$result2, "EmptyShape", $$EmptyShape, { "class": "blockquote-shape", "bottom": "0px", "right": "0px", "data-astro-cid-e7sszx3b": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Shape", $$Shape, { "color": "white", "class": "top", "translateY": "-100%", "rotate": "90deg", "data-astro-cid-e7sszx3b": true })} ${renderComponent($$result3, "Shape", $$Shape, { "color": "white", "class": "bottom", "translateX": "-100%", "rotate": "90deg", "data-astro-cid-e7sszx3b": true })} ` })} </blockquote> ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Blockquote.astro", void 0);

const $$BlockquoteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="blockquote-footer" data-astro-cid-ngtpdszm> ${renderSlot($$result, $$slots["default"])} </footer> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/BlockquoteFooter.astro", void 0);

/*Should start with 'images'*/
const frontmatter = {
  "id": "maysternya-mista",
  "title": "Майстерня міста",
  "description": "краудфандингова платформа",
  "pubDate": "2024-05-14T00:00:00.000Z",
  "cover": "./images/velokuhnya.png",
  "color": "primary",
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
const maysternyaImages = ["images/maysternya-mista/maysternya_mista_001.jpg", "images/maysternya-mista/maysternya_mista_002.jpg", "images/maysternya-mista/maysternya_mista_003.jpg", "images/maysternya-mista/maysternya_mista_004.jpg"];
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: ["\n", "\n", createVNode(_components.h1, {
      id: "heading",
      children: "Heading"
    }), "\n", createVNode($$Gallery, {
      imagePaths: maysternyaImages
    }), "\n", createVNode($$Blockquote, {
      children: [createVNode(_components.p, {
        children: [createVNode("span", {
          children: "“"
        }), "Це була перша ініціатива, яку ми розробили у рамках програми Glovo Acts.\nПочати вирішили саме з Чернігова, який серйозно постраждав внаслідок бойових дій", createVNode("span", {
          children: "”"
        })]
      }), createVNode($$BlockquoteFooter, {
        children: [createVNode(_components.p, {
          children: "Марина Павлюк"
        }), createVNode(_components.p, {
          children: "Генеральна директорка Glovo в Україні"
        })]
      })]
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

const url = "src/content/projects/maysternya-mista.mdx";
const file = "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/maysternya-mista.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Volumes/Media HD/Web Development/ecomisto/src/content/projects/maysternya-mista.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, maysternyaImages, url };
