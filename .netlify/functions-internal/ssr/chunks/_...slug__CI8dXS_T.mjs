import { a as createComponent, b as renderTemplate, m as maybeRenderHead, e as renderSlot, d as renderComponent, f as createAstro, g as addAttribute, s as spreadAttributes, h as defineStyleVars, F as Fragment, u as unescapeHTML } from './astro/server_DpbLoD-d.mjs';
import { a as $$Frame, b as $$TimePeriod, c as $$ProjectCard, d as $$Row, e as $$MyPicture, g as getCollection, $ as $$Section } from './TimePeriod_DDFDTGuL.mjs';
import { $ as $$Heading, d as $$Link, a as $$Stack, e as $$Cluster, f as $$Text, h as $$Icon, i as getTimePeriod, b as $$Center, j as getRatio, k as $$Shape, l as $$Button, m as $$SideModal, n as $$Donate, g as getSortedProjects, o as getProjectIndex, c as $$BaseLayout } from './BaseLayout_B6LxzPtz.mjs';
/* empty css                          */
import { $ as $$Image, a as $$Picture } from './_astro_assets_DWB9kGPJ.mjs';
import { $ as $$EmptyShape, a as $$AutoGrid, b as $$Partnership } from './Partnership_iwCWb3TH.mjs';
import { parse } from 'node-html-parser';

const $$ProjectLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="content" data-astro-cid-eo3wme6m> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/layouts/ProjectLayout.astro", void 0);

const $$H2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "tagName": "h2", "size": "h5" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/H2.astro", void 0);

const $$H3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Heading", $$Heading, { "tagName": "h3", "size": "h6" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/H3.astro", void 0);

const $$Astro$a = createAstro();
const $$ProjectNavigationItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ProjectNavigationItem;
  const { project, class: classList } = Astro2.props;
  const { title, cover, description, isCollage, period } = project.data;
  let timePeriod;
  if (period) {
    timePeriod = getTimePeriod(period);
  }
  const siteUrl = Astro2.site ? new URL(`/projects/${project.slug}`, Astro2.site) : `https://ecomisto.netlify.app/projects/${project.slug}`;
  return renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "class:list": ["project-navigation", classList], "data-astro-cid-fpgl5hly": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Link", $$Link, { "href": `${siteUrl}`, "data-astro-cid-fpgl5hly": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-6", "data-astro-cid-fpgl5hly": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Frame", $$Frame, { "ratio": "3:2", "class:list": ["cover-wrapper", { collage: isCollage }], "data-astro-cid-fpgl5hly": true }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "Image", $$Image, { "src": cover, "alt": "", "data-astro-cid-fpgl5hly": true })} ` })} ${renderComponent($$result4, "Stack", $$Stack, { "space": "space-2", "data-astro-cid-fpgl5hly": true }, { "default": ($$result5) => renderTemplate`${timePeriod && renderTemplate`${renderComponent($$result5, "TimePeriod", $$TimePeriod, { "data-astro-cid-fpgl5hly": true }, { "default": ($$result6) => renderTemplate`${timePeriod}` })}`}${renderComponent($$result5, "Cluster", $$Cluster, { "noWrap": true, "justify": "between", "alignItems": "baseline", "space": "space-7", "data-astro-cid-fpgl5hly": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Stack", $$Stack, { "space": "space-3", "data-astro-cid-fpgl5hly": true }, { "default": ($$result7) => renderTemplate` ${renderComponent($$result7, "Heading", $$Heading, { "tagName": "h4", "size": "h6", "class": "title font-heading color-secondary", "data-astro-cid-fpgl5hly": true }, { "default": ($$result8) => renderTemplate`${title}` })} ${renderComponent($$result7, "Text", $$Text, { "tagName": "p", "size": "medium", "class": "color-black description", "data-astro-cid-fpgl5hly": true }, { "default": ($$result8) => renderTemplate`${description}` })} ` })} ${renderComponent($$result6, "Icon", $$Icon, { "name": "icon-arrow-right", "aria-hidden": "true", "focusable": "false", "class": "color-primary", "data-astro-cid-fpgl5hly": true })} ` })} ` })} ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/ProjectNavigationItem.astro", void 0);

const $$Astro$9 = createAstro();
const $$ArrowIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ArrowIcon;
  const styleOptions = {
    primary: "primary",
    secondary: "secondary"
  };
  const directionOptions = {
    left: "left",
    right: "right"
  };
  const {
    class: classList,
    style,
    direction = "right",
    isOutline = false,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "arrow",
    classList,
    styleOptions[style],
    directionOptions[direction],
    { outline: isOutline }
  ], "class:list")}${spreadAttributes(rest)} data-astro-cid-xxwwxqrn> ${renderComponent($$result, "Icon", $$Icon, { "name": "icon-arrow-right", "size": 32, "data-astro-cid-xxwwxqrn": true })} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/ui/ArrowIcon.astro", void 0);

const $$SwiperButtons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="swiper-buttons" data-astro-cid-ibxhwnop> <div class="swiper-button swiper-button-prev" data-astro-cid-ibxhwnop> ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, { "style": "primary", "direction": "left", "class": "swiper-button", "data-astro-cid-ibxhwnop": true })} </div> <div class="swiper-button swiper-button-next" data-astro-cid-ibxhwnop> ${renderComponent($$result, "ArrowIcon", $$ArrowIcon, { "style": "primary", "data-astro-cid-ibxhwnop": true })} </div> </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/SwiperButtons.astro", void 0);

const $$Annotation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="annotation" data-astro-cid-y4ai7azv> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Annotation.astro", void 0);

const $$Astro$8 = createAstro();
const $$MultiSlideGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MultiSlideGallery;
  const { imagePaths, orientation = "landscape" } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/content/projects/images/city-makers/multiple_gallery_city-makers_001.jpg": () => import('./multiple_gallery_city-makers_001_CWkj1XtF.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_002.jpg": () => import('./multiple_gallery_city-makers_002_DRKK5U9d.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_003.jpg": () => import('./multiple_gallery_city-makers_003_92cqUxBg.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_004.jpg": () => import('./multiple_gallery_city-makers_004_BWOe9J-j.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_005.jpg": () => import('./multiple_gallery_city-makers_005_BDedn5RY.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_006.jpg": () => import('./multiple_gallery_city-makers_006_CG9LgQ2x.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_007.jpg": () => import('./multiple_gallery_city-makers_007_-8c56RxT.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_008.jpg": () => import('./multiple_gallery_city-makers_008_CCxC4m9t.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_009.jpg": () => import('./multiple_gallery_city-makers_009_D7-6unNf.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_010.jpg": () => import('./multiple_gallery_city-makers_010_1U2sIcFd.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_011.jpg": () => import('./multiple_gallery_city-makers_011_aXAO3RbB.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_001.jpg": () => import('./multiple_gallery_plastic-equipment_001_ONKYGz0K.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_002.jpg": () => import('./multiple_gallery_plastic-equipment_002_Bs41oBbw.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_003.jpg": () => import('./multiple_gallery_plastic-equipment_003_9d1ixRXk.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_004.jpg": () => import('./multiple_gallery_plastic-equipment_004_Bt1TDHBJ.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_005.jpg": () => import('./multiple_gallery_plastic-equipment_005_DuGbXvPG.mjs'),"/src/content/projects/images/plastic-fantastic/plastic-types.jpg": () => import('./plastic-types_BCij46uN.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_001.jpg": () => import('./plastic_fantastic_001_DnhFc_MN.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_002.jpg": () => import('./plastic_fantastic_002_CetdGmsZ.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_003.jpg": () => import('./plastic_fantastic_003_0mCMYyx4.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_004.jpg": () => import('./plastic_fantastic_004_CbSVlpGa.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_005.jpg": () => import('./plastic_fantastic_005_DxJlJZvP.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_006.jpg": () => import('./plastic_fantastic_006_DVJzOBcl.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_007.jpg": () => import('./plastic_fantastic_007_Bio08QgQ.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_008.jpg": () => import('./plastic_fantastic_008_CAcycicM.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_009.jpg": () => import('./plastic_fantastic_009_BaBiml2Z.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_010.jpg": () => import('./plastic_fantastic_010_hksTqHk4.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_011.jpg": () => import('./plastic_fantastic_011_dk-MBYQA.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_001.jpg": () => import('./plastic_fantastic_product_001_CC-f3c8J.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_002.jpg": () => import('./plastic_fantastic_product_002_BWMOpDXv.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_003.jpg": () => import('./plastic_fantastic_product_003_C-27Mlwq.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_004.jpg": () => import('./plastic_fantastic_product_004_Bv-Q1PPh.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_005.jpg": () => import('./plastic_fantastic_product_005_Dr336Gjv.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_001.jpg": () => import('./multiple_gallery_prostir-diy_001_Bx4zg6Yk.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_002.jpg": () => import('./multiple_gallery_prostir-diy_002_BH86Dm04.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_003.jpg": () => import('./multiple_gallery_prostir-diy_003_BZLhFM4G.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_004.jpg": () => import('./multiple_gallery_prostir-diy_004_BAOgVIyE.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_005.jpg": () => import('./multiple_gallery_prostir-diy_005_DknsKQ97.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_006.jpg": () => import('./multiple_gallery_prostir-diy_006_BCYhmYI9.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_007.jpg": () => import('./multiple_gallery_prostir-diy_007_BBzGObyh.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_008.jpg": () => import('./multiple_gallery_prostir-diy_008_BM0fWkDU.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_009.jpg": () => import('./multiple_gallery_prostir-diy_009_CVFQ7DN_.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_010.jpg": () => import('./multiple_gallery_prostir-diy_010_Bkn1DNws.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_011.jpg": () => import('./multiple_gallery_prostir-diy_011_IzRbjeme.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_012.jpg": () => import('./multiple_gallery_prostir-diy_012_C8v9WNoO.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_001.jpg": () => import('./single_gallery_prostir-diy_001_C9k09Vfr.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_002.jpg": () => import('./single_gallery_prostir-diy_002_DmPIqtr_.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_003.jpg": () => import('./single_gallery_prostir-diy_003_DhlXcEGX.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_004.jpg": () => import('./single_gallery_prostir-diy_004_nmx8oxIE.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_005.jpg": () => import('./single_gallery_prostir-diy_005_CmGi4J1i.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_006.jpg": () => import('./single_gallery_prostir-diy_006_ZDG28jNE.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_007.jpg": () => import('./single_gallery_prostir-diy_007_D4pBVUfH.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_008.jpg": () => import('./single_gallery_prostir-diy_008_7hTCtcfP.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_009.jpg": () => import('./single_gallery_prostir-diy_009_B6k-6KkP.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_010.jpg": () => import('./single_gallery_prostir-diy_010_ClfEH9wE.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_011.jpg": () => import('./single_gallery_prostir-diy_011_C_hjVvFc.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_012.jpg": () => import('./single_gallery_prostir-diy_012_DxNQmvFn.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_013.jpg": () => import('./single_gallery_prostir-diy_013_xx2azsFZ.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_014.jpg": () => import('./single_gallery_prostir-diy_014_YyOARvmS.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_015.jpg": () => import('./single_gallery_prostir-diy_015_CAYC7O_B.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_016.jpg": () => import('./single_gallery_prostir-diy_016_i2Zl3uwm.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_001.jpg": () => import('./gallery_supersorters_001_DN8_TjCO.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_002.jpg": () => import('./gallery_supersorters_002_CpY0O00L.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_003.jpg": () => import('./gallery_supersorters_003_DbeYmnPB.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_004.jpg": () => import('./gallery_supersorters_004_8xvzQ5kd.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_005.jpg": () => import('./gallery_supersorters_005_UbHSeQqd.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_006.jpg": () => import('./gallery_supersorters_006_DZWwMN34.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_007.jpg": () => import('./gallery_supersorters_007_DpKrfFQs.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_001.jpg": () => import('./single_gallery_supersorters_001_CN6Ix-Cy.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_002.jpg": () => import('./single_gallery_supersorters_002_s2a51Yt0.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_003.jpg": () => import('./single_gallery_supersorters_003_BJVQR7AA.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_004.jpg": () => import('./single_gallery_supersorters_004_HpwWBro3.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_005.jpg": () => import('./single_gallery_supersorters_005_BpyZA23X.mjs'),"/src/content/projects/images/tolocar_021.jpg": () => import('./tolocar_021_Bt5z7KaJ.mjs'),"/src/content/projects/images/velolink/gallery_velolink_001.jpg": () => import('./gallery_velolink_001_D0G2zVbj.mjs'),"/src/content/projects/images/velolink/gallery_velolink_002.jpg": () => import('./gallery_velolink_002_DBDZysfp.mjs'),"/src/content/projects/images/velolink/gallery_velolink_003.jpg": () => import('./gallery_velolink_003_Cv1w1ksc.mjs'),"/src/content/projects/images/velolink/gallery_velolink_004.jpg": () => import('./gallery_velolink_004_CY3ToIpy.mjs'),"/src/content/projects/images/velolink/gallery_velolink_005.jpg": () => import('./gallery_velolink_005_BCIxhfwM.mjs'),"/src/content/projects/images/velolink/gallery_velolink_006.jpg": () => import('./gallery_velolink_006_JYmVMeZP.mjs'),"/src/content/projects/images/velolink/gallery_velolink_007.jpg": () => import('./gallery_velolink_007_BDhGMQAn.mjs'),"/src/content/projects/images/velolink/gallery_velolink_008.jpg": () => import('./gallery_velolink_008_Cbt1ZXVk.mjs'),"/src/content/projects/images/velolink/gallery_velolink_009.jpg": () => import('./gallery_velolink_009_nwVaOEew.mjs'),"/src/content/projects/images/velolink/gallery_velolink_010.jpg": () => import('./gallery_velolink_010_Cwn24Qs_.mjs'),"/src/content/projects/images/velolink/gallery_velolink_011.jpg": () => import('./gallery_velolink_011_BJNn72Qt.mjs'),"/src/content/projects/images/velolink/gallery_velolink_012.jpg": () => import('./gallery_velolink_012_BikzqMKu.mjs')

});
  imagePaths.forEach((imagePath) => {
    const newPath = `/src/content/projects/${imagePath}`;
    if (!images[newPath])
      throw new Error(
        `"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`
      );
  });
  const ratio = getRatio(orientation);
  return renderTemplate`${maybeRenderHead()}<div class="multi-slide-gallery" data-astro-cid-bs63fv3p> <div class="multi-slide-swiper swiper" data-astro-cid-bs63fv3p> <div class="swiper-wrapper" data-astro-cid-bs63fv3p> ${imagePaths?.map((imagePath) => {
    const newPath = `/src/content/projects/${imagePath}`;
    return renderTemplate`<div class="swiper-slide" data-astro-cid-bs63fv3p> ${renderComponent($$result, "Frame", $$Frame, { "ratio": ratio, "class": "img-wrapper", "data-astro-cid-bs63fv3p": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Picture", $$Picture, { "src": images[newPath](), "width": 1e3, "formats": ["avif", "webp"], "alt": "", "densities": [1.5, 2], "data-astro-cid-bs63fv3p": true })} ` })} </div>`;
  })} </div> <div class="swiper-navigation" data-astro-cid-bs63fv3p> ${renderComponent($$result, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7" }, "data-astro-cid-bs63fv3p": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Cluster", $$Cluster, { "space": "space-10", "alignItems": "center", "noWrap": true, "data-astro-cid-bs63fv3p": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Cluster", $$Cluster, { "alignItems": "center", "noWrap": true, "class": "swiper-pagination-wrapper", "data-astro-cid-bs63fv3p": true }, { "default": ($$result4) => renderTemplate` <div class="swiper-pagination" data-astro-cid-bs63fv3p> <span class="swiper-pagination-progressbar-fill" data-astro-cid-bs63fv3p></span> </div> <div class="round-corner" data-astro-cid-bs63fv3p></div> ` })} ${renderComponent($$result3, "SwiperButtons", $$SwiperButtons, { "data-astro-cid-bs63fv3p": true })} ` })} ` })} </div> </div> ${renderComponent($$result, "Annotation", $$Annotation, { "data-astro-cid-bs63fv3p": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div>  `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/MultiSlideGallery.astro", void 0);

const $$Astro$7 = createAstro();
const $$SingleSlideGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SingleSlideGallery;
  const { imagePaths, orientation } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/content/projects/images/city-makers/multiple_gallery_city-makers_001.jpg": () => import('./multiple_gallery_city-makers_001_CWkj1XtF.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_002.jpg": () => import('./multiple_gallery_city-makers_002_DRKK5U9d.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_003.jpg": () => import('./multiple_gallery_city-makers_003_92cqUxBg.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_004.jpg": () => import('./multiple_gallery_city-makers_004_BWOe9J-j.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_005.jpg": () => import('./multiple_gallery_city-makers_005_BDedn5RY.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_006.jpg": () => import('./multiple_gallery_city-makers_006_CG9LgQ2x.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_007.jpg": () => import('./multiple_gallery_city-makers_007_-8c56RxT.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_008.jpg": () => import('./multiple_gallery_city-makers_008_CCxC4m9t.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_009.jpg": () => import('./multiple_gallery_city-makers_009_D7-6unNf.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_010.jpg": () => import('./multiple_gallery_city-makers_010_1U2sIcFd.mjs'),"/src/content/projects/images/city-makers/multiple_gallery_city-makers_011.jpg": () => import('./multiple_gallery_city-makers_011_aXAO3RbB.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_001.jpg": () => import('./multiple_gallery_plastic-equipment_001_ONKYGz0K.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_002.jpg": () => import('./multiple_gallery_plastic-equipment_002_Bs41oBbw.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_003.jpg": () => import('./multiple_gallery_plastic-equipment_003_9d1ixRXk.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_004.jpg": () => import('./multiple_gallery_plastic-equipment_004_Bt1TDHBJ.mjs'),"/src/content/projects/images/plastic-fantastic/multiple_gallery_plastic-equipment_005.jpg": () => import('./multiple_gallery_plastic-equipment_005_DuGbXvPG.mjs'),"/src/content/projects/images/plastic-fantastic/plastic-types.jpg": () => import('./plastic-types_BCij46uN.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_001.jpg": () => import('./plastic_fantastic_001_DnhFc_MN.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_002.jpg": () => import('./plastic_fantastic_002_CetdGmsZ.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_003.jpg": () => import('./plastic_fantastic_003_0mCMYyx4.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_004.jpg": () => import('./plastic_fantastic_004_CbSVlpGa.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_005.jpg": () => import('./plastic_fantastic_005_DxJlJZvP.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_006.jpg": () => import('./plastic_fantastic_006_DVJzOBcl.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_007.jpg": () => import('./plastic_fantastic_007_Bio08QgQ.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_008.jpg": () => import('./plastic_fantastic_008_CAcycicM.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_009.jpg": () => import('./plastic_fantastic_009_BaBiml2Z.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_010.jpg": () => import('./plastic_fantastic_010_hksTqHk4.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_011.jpg": () => import('./plastic_fantastic_011_dk-MBYQA.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_001.jpg": () => import('./plastic_fantastic_product_001_CC-f3c8J.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_002.jpg": () => import('./plastic_fantastic_product_002_BWMOpDXv.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_003.jpg": () => import('./plastic_fantastic_product_003_C-27Mlwq.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_004.jpg": () => import('./plastic_fantastic_product_004_Bv-Q1PPh.mjs'),"/src/content/projects/images/plastic-fantastic/plastic_fantastic_product_005.jpg": () => import('./plastic_fantastic_product_005_Dr336Gjv.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_001.jpg": () => import('./multiple_gallery_prostir-diy_001_Bx4zg6Yk.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_002.jpg": () => import('./multiple_gallery_prostir-diy_002_BH86Dm04.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_003.jpg": () => import('./multiple_gallery_prostir-diy_003_BZLhFM4G.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_004.jpg": () => import('./multiple_gallery_prostir-diy_004_BAOgVIyE.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_005.jpg": () => import('./multiple_gallery_prostir-diy_005_DknsKQ97.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_006.jpg": () => import('./multiple_gallery_prostir-diy_006_BCYhmYI9.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_007.jpg": () => import('./multiple_gallery_prostir-diy_007_BBzGObyh.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_008.jpg": () => import('./multiple_gallery_prostir-diy_008_BM0fWkDU.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_009.jpg": () => import('./multiple_gallery_prostir-diy_009_CVFQ7DN_.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_010.jpg": () => import('./multiple_gallery_prostir-diy_010_Bkn1DNws.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_011.jpg": () => import('./multiple_gallery_prostir-diy_011_IzRbjeme.mjs'),"/src/content/projects/images/prostir-diy/multiple_gallery_prostir-diy_012.jpg": () => import('./multiple_gallery_prostir-diy_012_C8v9WNoO.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_001.jpg": () => import('./single_gallery_prostir-diy_001_C9k09Vfr.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_002.jpg": () => import('./single_gallery_prostir-diy_002_DmPIqtr_.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_003.jpg": () => import('./single_gallery_prostir-diy_003_DhlXcEGX.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_004.jpg": () => import('./single_gallery_prostir-diy_004_nmx8oxIE.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_005.jpg": () => import('./single_gallery_prostir-diy_005_CmGi4J1i.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_006.jpg": () => import('./single_gallery_prostir-diy_006_ZDG28jNE.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_007.jpg": () => import('./single_gallery_prostir-diy_007_D4pBVUfH.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_008.jpg": () => import('./single_gallery_prostir-diy_008_7hTCtcfP.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_009.jpg": () => import('./single_gallery_prostir-diy_009_B6k-6KkP.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_010.jpg": () => import('./single_gallery_prostir-diy_010_ClfEH9wE.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_011.jpg": () => import('./single_gallery_prostir-diy_011_C_hjVvFc.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_012.jpg": () => import('./single_gallery_prostir-diy_012_DxNQmvFn.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_013.jpg": () => import('./single_gallery_prostir-diy_013_xx2azsFZ.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_014.jpg": () => import('./single_gallery_prostir-diy_014_YyOARvmS.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_015.jpg": () => import('./single_gallery_prostir-diy_015_CAYC7O_B.mjs'),"/src/content/projects/images/prostir-diy/single_gallery_prostir-diy_016.jpg": () => import('./single_gallery_prostir-diy_016_i2Zl3uwm.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_001.jpg": () => import('./gallery_supersorters_001_DN8_TjCO.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_002.jpg": () => import('./gallery_supersorters_002_CpY0O00L.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_003.jpg": () => import('./gallery_supersorters_003_DbeYmnPB.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_004.jpg": () => import('./gallery_supersorters_004_8xvzQ5kd.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_005.jpg": () => import('./gallery_supersorters_005_UbHSeQqd.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_006.jpg": () => import('./gallery_supersorters_006_DZWwMN34.mjs'),"/src/content/projects/images/supersorters/gallery_supersorters_007.jpg": () => import('./gallery_supersorters_007_DpKrfFQs.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_001.jpg": () => import('./single_gallery_supersorters_001_CN6Ix-Cy.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_002.jpg": () => import('./single_gallery_supersorters_002_s2a51Yt0.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_003.jpg": () => import('./single_gallery_supersorters_003_BJVQR7AA.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_004.jpg": () => import('./single_gallery_supersorters_004_HpwWBro3.mjs'),"/src/content/projects/images/supersorters/single_gallery_supersorters_005.jpg": () => import('./single_gallery_supersorters_005_BpyZA23X.mjs'),"/src/content/projects/images/tolocar_021.jpg": () => import('./tolocar_021_Bt5z7KaJ.mjs'),"/src/content/projects/images/velolink/gallery_velolink_001.jpg": () => import('./gallery_velolink_001_D0G2zVbj.mjs'),"/src/content/projects/images/velolink/gallery_velolink_002.jpg": () => import('./gallery_velolink_002_DBDZysfp.mjs'),"/src/content/projects/images/velolink/gallery_velolink_003.jpg": () => import('./gallery_velolink_003_Cv1w1ksc.mjs'),"/src/content/projects/images/velolink/gallery_velolink_004.jpg": () => import('./gallery_velolink_004_CY3ToIpy.mjs'),"/src/content/projects/images/velolink/gallery_velolink_005.jpg": () => import('./gallery_velolink_005_BCIxhfwM.mjs'),"/src/content/projects/images/velolink/gallery_velolink_006.jpg": () => import('./gallery_velolink_006_JYmVMeZP.mjs'),"/src/content/projects/images/velolink/gallery_velolink_007.jpg": () => import('./gallery_velolink_007_BDhGMQAn.mjs'),"/src/content/projects/images/velolink/gallery_velolink_008.jpg": () => import('./gallery_velolink_008_Cbt1ZXVk.mjs'),"/src/content/projects/images/velolink/gallery_velolink_009.jpg": () => import('./gallery_velolink_009_nwVaOEew.mjs'),"/src/content/projects/images/velolink/gallery_velolink_010.jpg": () => import('./gallery_velolink_010_Cwn24Qs_.mjs'),"/src/content/projects/images/velolink/gallery_velolink_011.jpg": () => import('./gallery_velolink_011_BJNn72Qt.mjs'),"/src/content/projects/images/velolink/gallery_velolink_012.jpg": () => import('./gallery_velolink_012_BikzqMKu.mjs')

});
  imagePaths.forEach((imagePath) => {
    const newPath = `/src/content/projects/${imagePath}`;
    if (!images[newPath])
      throw new Error(
        `"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`
      );
  });
  const ratio = getRatio(orientation);
  return renderTemplate`${maybeRenderHead()}<div class="single-slide-gallery" data-astro-cid-3i3kvsn4> <div class="single-slide-swiper swiper" data-astro-cid-3i3kvsn4> <div class="swiper-wrapper" data-astro-cid-3i3kvsn4> ${imagePaths?.map((imagePath) => {
    const newPath = `/src/content/projects/${imagePath}`;
    return renderTemplate`<div class="swiper-slide " data-astro-cid-3i3kvsn4> ${renderComponent($$result, "Frame", $$Frame, { "ratio": ratio, "class": "img-wrapper", "data-astro-cid-3i3kvsn4": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Picture", $$Picture, { "src": images[newPath](), "width": 1100, "formats": ["avif", "webp"], "alt": "", "densities": [1.5, 2], "data-astro-cid-3i3kvsn4": true })} ` })} <div class="slide-gradient" data-astro-cid-3i3kvsn4></div> </div>`;
  })} </div> <div class="swiper-navigation" data-astro-cid-3i3kvsn4> <!-- <div class="swiper-buttons">
        <div class="swiper-button swiper-button-prev">
          <ArrowIcon style="primary" direction="left" />
        </div>
        <div class="swiper-button swiper-button-next">
          <ArrowIcon style="primary" />
        </div>
      </div> --> ${renderComponent($$result, "SwiperButtons", $$SwiperButtons, { "data-astro-cid-3i3kvsn4": true })} </div> </div> ${renderComponent($$result, "Annotation", $$Annotation, { "data-astro-cid-3i3kvsn4": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/SingleSlideGallery.astro", void 0);

const $$Centered = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Center", $$Center, { "maxWidth": "68.75rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" } }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Centered.astro", void 0);

const $$Blockquote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="quote" data-astro-cid-e7sszx3b> ${renderComponent($$result, "Centered", $$Centered, { "data-astro-cid-e7sszx3b": true }, { "default": ($$result2) => renderTemplate` <blockquote data-astro-cid-e7sszx3b> ${renderComponent($$result2, "Center", $$Center, { "maxWidth": "62.5rem", "space": { default: "space-7", tablet: "space-8" }, "data-astro-cid-e7sszx3b": true }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} ${renderComponent($$result2, "EmptyShape", $$EmptyShape, { "class": "blockquote-shape", "bottom": "0px", "right": "0px", "data-astro-cid-e7sszx3b": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Shape", $$Shape, { "color": "white", "class": "top", "translateY": "-100%", "rotate": "90deg", "data-astro-cid-e7sszx3b": true })} ${renderComponent($$result3, "Shape", $$Shape, { "color": "white", "class": "bottom", "translateX": "-100%", "rotate": "90deg", "data-astro-cid-e7sszx3b": true })} ` })} </blockquote> ` })} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Blockquote.astro", void 0);

const $$BlockquoteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="blockquote-footer" data-astro-cid-ngtpdszm> ${renderSlot($$result, $$slots["default"])} </footer> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/BlockquoteFooter.astro", void 0);

const $$Astro$6 = createAstro();
const $$Video = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Video;
  const { src } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="video" data-astro-cid-rbdmszkd> ${renderComponent($$result, "Centered", $$Centered, { "data-astro-cid-rbdmszkd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Frame", $$Frame, { "ratio": "16:9", "data-astro-cid-rbdmszkd": true }, { "default": ($$result3) => renderTemplate` <iframe${addAttribute(src, "src")} width="640" height="360" frameborder="0" allow="fullscreen; picture-in-picture" loading="lazy" allowfullscreen data-astro-cid-rbdmszkd></iframe> ` })} ` })} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Video.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Text", $$Text, { "tagName": "div", "size": "small", "class": "font-medium", "isBadge": true, "variant": "secondary" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Badge.astro", void 0);

const $$ProjectRow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="project-row"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/ProjectRow.astro", void 0);

const $$TextContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ProjectRow", $$ProjectRow, { "data-astro-cid-6pjiu5yg": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Centered", $$Centered, { "data-astro-cid-6pjiu5yg": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="text-content" data-astro-cid-6pjiu5yg> ${renderSlot($$result3, $$slots["default"])} </div> ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/TextContent.astro", void 0);

const $$Astro$5 = createAstro();
const $$AutoFlex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AutoFlex;
  const {
    space = "space-4",
    class: classList,
    justify = "center",
    minItemWidth = "0px",
    noStretch = false,
    ...rest
  } = Astro2.props;
  const $$definedVars = defineStyleVars([{ minItemWidth }]);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "auto-flex",
    { ["gap-" + space]: space },
    { "no-stretch": noStretch },
    { ["justify-" + justify]: justify },
    classList
  ], "class:list")}${spreadAttributes(rest)}${addAttribute($$definedVars, "style")}> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/compositions/AutoFlex.astro", void 0);

const $$Logos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="logos" data-astro-cid-3x2olnjd> ${renderComponent($$result, "Stack", $$Stack, { "space": "space-5", "data-astro-cid-3x2olnjd": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Text", $$Text, { "tagName": "p", "size": "small", "class": "color-gray-400", "data-astro-cid-3x2olnjd": true }, { "default": ($$result3) => renderTemplate`За підтримки донорів та партнерів` })}  ${renderComponent($$result2, "AutoFlex", $$AutoFlex, { "minItemWidth": "180px", "space": "space-6", "class": "logos-container", "noStretch": true, "justify": "start", "data-astro-cid-3x2olnjd": true }, { "default": ($$result3) => renderTemplate` ${renderSlot($$result3, $$slots["default"])} ` })} ` })} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Logos.astro", void 0);

const $$Results = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AutoGrid", $$AutoGrid, { "maxColumns": "2", "space": "space-8", "class": "results", "data-astro-cid-v44ymp7j": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Results.astro", void 0);

const $$ResultItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-4", "class": "result-item", "data-astro-cid-bzcxftrg": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/ResultItem.astro", void 0);

const $$Astro$4 = createAstro();
const $$ResultIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ResultIcon;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="result-icon" data-astro-cid-i3uc6jye> ${renderComponent($$result, "Icon", $$Icon, { "name": name, "size": 32, "data-astro-cid-i3uc6jye": true })} </div> `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/ResultIcon.astro", void 0);

const $$ImageGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Row", $$Row, { "rowGap": "space-4", "class": "image-grid" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/ImageGrid.astro", void 0);

const $$Astro$3 = createAstro();
const $$Half = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Half;
  const { src, alt = "Image", orientation = "landscape" } = Astro2.props;
  const ratio = getRatio(orientation);
  return renderTemplate`${renderComponent($$result, "Frame", $$Frame, { "ratio": ratio, "class": "col-6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MyPicture", $$MyPicture, { "src": src, "width": 600, "alt": alt })} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Half.astro", void 0);

const $$Astro$2 = createAstro();
const $$Full = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Full;
  const { src, alt = "Image", orientation = "landscape" } = Astro2.props;
  const ratio = getRatio(orientation);
  return renderTemplate`${renderComponent($$result, "Frame", $$Frame, { "ratio": ratio, "class": "col-12" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MyPicture", $$MyPicture, { "src": src, "width": 1200, "alt": alt })} ` })}`;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/Full.astro", void 0);

const $$Astro$1 = createAstro();
const $$ResultList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResultList;
  const html = await Astro2.slots.render("default");
  const root = parse(html);
  const listItems = root.querySelectorAll("li");
  return renderTemplate`${renderComponent($$result, "Stack", $$Stack, { "space": "space-2", "tagName": "ul", "class": "list", "role": "result-list", "data-astro-cid-lnhiwkmg": true }, { "default": ($$result2) => renderTemplate`${listItems.map((item) => {
    return renderTemplate`${maybeRenderHead()}<li class="result-item" data-astro-cid-lnhiwkmg> ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-check", "data-astro-cid-lnhiwkmg": true })} ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(item.innerHTML)}` })} </li>`;
  })}` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/ResultList.astro", void 0);

const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Center", $$Center, { "class": "call-to-action", "maxWidth": "68.75rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-67y627dr": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="inner" data-astro-cid-67y627dr> ${renderComponent($$result2, "Row", $$Row, { "columnGap": { default: "space-0", tablet: "space-4" }, "rowGap": { default: "space-4", tablet: "space-0" }, "class": "text", "data-astro-cid-67y627dr": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Heading", $$Heading, { "tagName": "h5", "size": "h5", "class": "font-heading col-12 tablet:col-6", "data-astro-cid-67y627dr": true }, { "default": ($$result4) => renderTemplate`Подобається, що ми робимо?` })} ${renderComponent($$result3, "Text", $$Text, { "tagName": "p", "size": "x-large", "class": "col-12 tablet:col-6", "data-astro-cid-67y627dr": true }, { "default": ($$result4) => renderTemplate`Ми відкриті до співпраці й будемо раді будь-якій допомозі: пиши,
        дзвони, донать, долучайся!` })} ` })} <div class="actions" data-astro-cid-67y627dr> ${renderComponent($$result2, "Shape", $$Shape, { "class": "top", "color": "white", "translateY": "-100%", "rotate": "90deg", "data-astro-cid-67y627dr": true })} ${renderComponent($$result2, "Shape", $$Shape, { "class": "left", "color": "white", "translateX": "-100%", "rotate": "90deg", "data-astro-cid-67y627dr": true })} <div class="wrapper" data-astro-cid-67y627dr> ${renderComponent($$result2, "Button", $$Button, { "style": "primary", "data-open-modal": true, "aria-label": "Open cooperation form modal", "aria-expanded": "false", "size": "small", "class": "cooperation-button col-12 tablet:col-6", "data-astro-cid-67y627dr": true }, { "default": ($$result3) => renderTemplate`Написати
` })} ${renderComponent($$result2, "SideModal", $$SideModal, { "name": "partnership-form", "data-astro-cid-67y627dr": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Partnership", $$Partnership, { "data-astro-cid-67y627dr": true })} ` })} ${renderComponent($$result2, "Button", $$Button, { "style": "secondary", "size": "small", "class": "support-button col-12 tablet:col-6", "data-open-modal": true, "aria-label": "Open donate form modal", "aria-expanded": "false", "data-astro-cid-67y627dr": true }, { "default": ($$result3) => renderTemplate`Підтримати ${renderComponent($$result3, "Icon", $$Icon, { "name": "icon-heart", "aria-hidden": "true", "focusable": "false", "data-astro-cid-67y627dr": true })}` })} ${renderComponent($$result2, "SideModal", $$SideModal, { "name": "donate-form", "data-astro-cid-67y627dr": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Donate", $$Donate, { "data-astro-cid-67y627dr": true })} ` })} </div> </div> </div> ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/components/project/CallToAction.astro", void 0);

const components = {
  MultiSlideGallery: $$MultiSlideGallery,
  SingleSlideGallery: $$SingleSlideGallery,
  Blockquote: $$Blockquote,
  BlockquoteFooter: $$BlockquoteFooter,
  Video: $$Video,
  Badge: $$Badge,
  Centered: $$Centered,
  TextContent: $$TextContent,
  Logos: $$Logos,
  Results: $$Results,
  ResultItem: $$ResultItem,
  ResultIcon: $$ResultIcon,
  ImageGrid: $$ImageGrid,
  Half: $$Half,
  Full: $$Full,
  ResultList: $$ResultList,
  Icon: $$Icon,
  ProjectRow: $$ProjectRow,
  CallToAction: $$CallToAction,
};

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const projects = await getCollection("projects", ({ data }) => !data.isDraft);
  return projects.map((project) => ({
    params: {
      slug: project.slug
    },
    props: {
      project,
      projects
    }
  }));
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { project, projects } = Astro2.props;
  const { Content } = await project.render();
  const { title, description, cover, isCollage = false } = project.data;
  const sortedProjects = getSortedProjects(projects);
  const activeProjects = sortedProjects.filter(({ data }) => data.isActive);
  const archiveProjects = sortedProjects.filter(({ data }) => !data.isActive);
  const isActive = project.data.isActive;
  const index = isActive ? getProjectIndex(activeProjects, project) : getProjectIndex(archiveProjects, project);
  const previousProject = isActive ? activeProjects[index - 1] : archiveProjects[index - 1];
  const nextProject = isActive ? activeProjects[index + 1] : archiveProjects[index + 1];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-5uq7evlv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class": "hero", "isRoundBottom": true, "color": "secondary", "data-astro-cid-5uq7evlv": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Center", $$Center, { "maxWidth": "87.5rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "data-astro-cid-5uq7evlv": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Stack", $$Stack, { "space": { default: "space-6", tablet: "space-0" }, "class": "wrapper", "data-astro-cid-5uq7evlv": true }, { "default": ($$result5) => renderTemplate` ${maybeRenderHead()}<div class="text-wrapper" data-astro-cid-5uq7evlv> ${renderComponent($$result5, "Shape", $$Shape, { "color": "secondary", "class": "top", "data-astro-cid-5uq7evlv": true })} ${renderComponent($$result5, "Shape", $$Shape, { "color": "secondary", "class": "bottom", "rotate": "270deg", "data-astro-cid-5uq7evlv": true })} ${renderComponent($$result5, "Stack", $$Stack, { "space": "space-2", "class": "hero-text", "data-astro-cid-5uq7evlv": true }, { "default": ($$result6) => renderTemplate` ${renderComponent($$result6, "Heading", $$Heading, { "tagName": "h1", "size": "h3", "class": "title font-heading color-primary", "data-astro-cid-5uq7evlv": true }, { "default": ($$result7) => renderTemplate`${title}` })} ${renderComponent($$result6, "Text", $$Text, { "tagName": "p", "size": "large", "class": "color-accent", "data-astro-cid-5uq7evlv": true }, { "default": ($$result7) => renderTemplate`${description}` })} ` })} </div> <div class="img-wrapper" data-astro-cid-5uq7evlv> <div${addAttribute(["hero-img", { collage: isCollage }], "class:list")} data-astro-cid-5uq7evlv> ${renderComponent($$result5, "MyPicture", $$MyPicture, { "src": cover, "alt": "", "width": 1120, "data-astro-cid-5uq7evlv": true })} </div> </div> ` })} ` })} ` })} ${renderComponent($$result2, "ProjectLayout", $$ProjectLayout, { "data-astro-cid-5uq7evlv": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, { "components": { ...components, h2: $$H2, h3: $$H3 }, "data-astro-cid-5uq7evlv": true })} ` })} ${isActive ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-5uq7evlv": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CallToAction", $$CallToAction, { "data-astro-cid-5uq7evlv": true })} ` })}` : ""}${renderComponent($$result2, "Center", $$Center, { "maxWidth": "68.75rem", "space": { default: "space-6", tablet: "space-7", laptop: "space-9" }, "class": "pagination", "data-astro-cid-5uq7evlv": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Stack", $$Stack, { "space": "space-10", "data-astro-cid-5uq7evlv": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Heading", $$Heading, { "tagName": "h3", "size": "h5", "data-astro-cid-5uq7evlv": true }, { "default": ($$result5) => renderTemplate`Інші проєкти` })} ${renderComponent($$result4, "Row", $$Row, { "columnGap": { default: "space-0", tablet: "space-7" }, "rowGap": { default: "space-8", tablet: "space-0" }, "data-astro-cid-5uq7evlv": true }, { "default": ($$result5) => renderTemplate`${previousProject && renderTemplate`${renderComponent($$result5, "ProjectNavigationItem", $$ProjectNavigationItem, { "project": previousProject, "class": "previous-project col-12 col-start-1 tablet:col-6", "data-astro-cid-5uq7evlv": true })}`}${nextProject && renderTemplate`${renderComponent($$result5, "ProjectNavigationItem", $$ProjectNavigationItem, { "project": nextProject, "class": "next-project col-12 col-start-1 tablet:col-6 tablet:col-start-7", "data-astro-cid-5uq7evlv": true })}`}` })} ` })} ` })} ` })} `;
}, "/Volumes/Media HD/Web Development/ecomisto/src/pages/projects/[...slug].astro", void 0);

const $$file = "/Volumes/Media HD/Web Development/ecomisto/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
