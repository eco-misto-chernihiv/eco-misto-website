import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D3nJfXsh.mjs';
import { i as iakLogo } from './logo-iak_CHGUWL1v.mjs';

/*Should start with 'images'*/
/*prettier-ignore*/
/*prettier-ignore*/
const frontmatter = {
  "title": "DIY For Climate",
  "description": "An international project that brought together young people from four countries to take joint action in adapting cities to climate change.",
  "pubDate": "2024-05-17T00:00:00.000Z",
  "cover": {
    "image": "../images/diy-for-climate/multiple_gallery_diy-for-climate_001.jpg",
    "alt": "Опис"
  },
  "isActive": false,
  "period": {
    "startYear": 2022,
    "startMonth": "September",
    "endYear": 2022,
    "endMonth": "December"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "to-promote-environmental-responsibility-and-resilience-by-engaging-citizens-in-sustainable-diy-practices-and-projects-that-counter-climate-change-through-hands-on-actions-and-educational-initiatives",
    "text": "To promote environmental responsibility and resilience by engaging citizens in sustainable DIY practices and projects that counter climate change through hands-on actions and educational initiatives."
  }];
}
const diyForClimateMultiSlideImages = ["images/diy-for-climate/multiple_gallery_diy-for-climate_001.jpg", "images/diy-for-climate/multiple_gallery_diy-for-climate_002.jpg", "images/diy-for-climate/multiple_gallery_diy-for-climate_003.jpg", "images/diy-for-climate/multiple_gallery_diy-for-climate_004.jpg", "images/diy-for-climate/multiple_gallery_diy-for-climate_005.jpg", "images/diy-for-climate/multiple_gallery_diy-for-climate_006.jpg", "images/diy-for-climate/multiple_gallery_diy-for-climate_007.jpg", "images/diy-for-climate/multiple_gallery_diy-for-climate_008.jpg"];
const diyForClimatePDF = ["images/diy-for-climate/single_gallery_diy-for-climate_001.jpg", "images/diy-for-climate/single_gallery_diy-for-climate_002.jpg", "images/diy-for-climate/single_gallery_diy-for-climate_003.jpg"];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, {Badge, Blockquote, BlockquoteFooter, Centered, Icon, Link, Logos, MultiSlideGallery, MyPicture, ResultList, SingleSlideGallery, TextContent, Video} = _components;
  if (!Badge) _missingMdxReference("Badge");
  if (!Blockquote) _missingMdxReference("Blockquote");
  if (!BlockquoteFooter) _missingMdxReference("BlockquoteFooter");
  if (!Centered) _missingMdxReference("Centered");
  if (!Icon) _missingMdxReference("Icon");
  if (!Link) _missingMdxReference("Link");
  if (!Logos) _missingMdxReference("Logos");
  if (!MultiSlideGallery) _missingMdxReference("MultiSlideGallery");
  if (!MyPicture) _missingMdxReference("MyPicture");
  if (!ResultList) _missingMdxReference("ResultList");
  if (!SingleSlideGallery) _missingMdxReference("SingleSlideGallery");
  if (!TextContent) _missingMdxReference("TextContent");
  if (!Video) _missingMdxReference("Video");
  return createVNode(Fragment, {
    children: ["\n", "\n", "\n", "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Goal"
      }), createVNode(_components.h2, {
        id: "to-promote-environmental-responsibility-and-resilience-by-engaging-citizens-in-sustainable-diy-practices-and-projects-that-counter-climate-change-through-hands-on-actions-and-educational-initiatives",
        children: "To promote environmental responsibility and resilience by engaging citizens in sustainable DIY practices and projects that counter climate change through hands-on actions and educational initiatives."
      })]
    }), "\n", createVNode(TextContent, {
      children: [createVNode(_components.p, {
        children: [createVNode(Badge, {
          children: "The Process"
        }), "\nThe project lasted four months, uniting youth from four countries to help cities adapt to climate change and reduce their carbon footprint. It brought together 24 young community representatives from Germany, Ukraine, Moldova, and Belarus. In the first stage, participants joined an online meet-up with a facilitator to lay the groundwork for effective collaboration. This was followed by three educational webinars focused on the challenges of climate change and ways cities can adapt."]
      }), createVNode(_components.p, {
        children: "The highlight of the project was a 7-day training exchange in Berlin, where participants learned to implement DIY solutions for urban sustainability. After returning home, they organized practical workshops in their communities — sharing knowledge and engaging local residents in environmental action."
      })]
    }), "\n", createVNode(Video, {
      src: "https://www.youtube.com/embed/rJ0_glaxXBA?si=SFk7wAYT5xI_O-1F"
    }), "\n", createVNode(TextContent, {
      children: createVNode(_components.p, {
        children: "To share the outcomes, seven themed videos and a multilingual guide titled “DIY Solutions for Urban Gardening” were created and made accessible to all interested audiences. The project concluded with an online forum where participants presented their achievements and shared future plans."
      })
    }), "\n", createVNode(Centered, {
      children: createVNode(SingleSlideGallery, {
        imagePaths: diyForClimatePDF,
        orientation: "landscape",
        children: [createVNode(_components.p, {
          children: "You can view and download the guide at the following link:"
        }), createVNode(Link, {
          href: "https://plato.lviv.ua/wp-content/uploads/2023/01/diy-rishennya.pdf",
          isHovered: true,
          hoverHeight: "1px",
          isExternal: true,
          target: "_blank",
          children: createVNode(_components.p, {
            children: "DIY Solutions for Urban Gardening"
          })
        })]
      })
    }), "\n", createVNode(TextContent, {
      children: createVNode(_components.p, {
        children: "This project not only empowered young people with knowledge, but also equipped them with practical tools for sustainable development in their communities — helping reduce carbon footprints and support climate adaptation."
      })
    }), "\n", "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Results"
      }), createVNode(ResultList, {
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "24 young experts in urban development and planning from Germany, Ukraine, Moldova, and Belarus explored the topic of climate change in cities."
          }), "\n", createVNode(_components.li, {
            children: "4 practical workshops were held on DIY solutions for urban climate adaptation."
          }), "\n", createVNode(_components.li, {
            children: "The guide “DIY Solutions for Urban Gardening” was developed."
          }), "\n", createVNode(_components.li, {
            children: "7 videos from the urban workshops were produced and published, featuring participant interviews on the project theme."
          }), "\n", createVNode(_components.li, {
            children: "Group projects were showcased at the online forum “DIY For Climate”."
          }), "\n"]
        })
      })]
    }), "\n", createVNode(Blockquote, {
      children: [createVNode(_components.p, {
        children: [createVNode("span", {
          children: "“"
        }), "Implementing best practices in urban gardening can help cities become more self-reliant and resilient in the face of wartime challenges — especially those related to food security.", createVNode("span", {
          children: "”"
        })]
      }), createVNode(BlockquoteFooter, {
        children: [createVNode(_components.p, {
          children: "Tetiana Lebukhorska"
        }), createVNode(_components.p, {
          children: "“Victory Gardens” initiative, SURGe project"
        })]
      })]
    }), "\n", createVNode(Logos, {
      children: [createVNode(Icon, {
        name: "donors-evz"
      }), createVNode(Icon, {
        name: "partners-ecovisio-original"
      }), createVNode(Icon, {
        name: "logo-plato"
      }), createVNode("div", {
        class: "donor-logo",
        children: createVNode(MyPicture, {
          src: iakLogo,
          width: 300,
          alt: "IAK. Politisch Reisen logo"
        })
      }), createVNode(Icon, {
        name: "donors-evz"
      }), createVNode(Icon, {
        name: "partners-ecovisio-original"
      }), createVNode(Icon, {
        name: "logo-plato"
      }), createVNode("div", {
        class: "donor-logo",
        children: createVNode(MyPicture, {
          src: iakLogo,
          width: 300,
          alt: "IAK. Politisch Reisen logo"
        })
      })]
    }), "\n", createVNode(MultiSlideGallery, {
      imagePaths: diyForClimateMultiSlideImages,
      isFullscreen: true
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/projects/en/diy-for-climate.mdx";
const file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/diy-for-climate.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/diy-for-climate.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, diyForClimateMultiSlideImages, diyForClimatePDF, file, frontmatter, getHeadings, url };
