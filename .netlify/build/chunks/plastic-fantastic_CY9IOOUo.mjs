import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D3nJfXsh.mjs';
import product1 from './plastic_fantastic_product_001_CSrHpEu3.mjs';
import product2 from './plastic_fantastic_product_002_C-2TbCzI.mjs';
import product3 from './plastic_fantastic_product_003_D289kkNy.mjs';
import product4 from './plastic_fantastic_product_004_CFeLWnA7.mjs';
import './plastic_fantastic_product_005_C4iFwI8b.mjs';
import { p as plasticTypes } from './plastic-types_28LWvkSa.mjs';
import { g as gizLogo } from './giz_4WortYbu.mjs';

/*Assets*/
/*Should start with 'images'*/
/*prettier-ignore*/
/*prettier-ignore*/
/*prettier-ignore*/
/*prettier-ignore*/
const frontmatter = {
  "title": "Plastic Fantastic",
  "description": "A workshop and brand exploring recycled plastic processing and promoting its use as a resource for product design.",
  "pubDate": "2999-01-02T00:00:00.000Z",
  "cover": {
    "image": "../images/plastic-fantastic/cover_plastic-fantastic-2.png",
    "alt": "Опис"
  },
  "isActive": true,
  "isCollage": true
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "whats-in-our-trash-bin",
    "text": "What’s in our trash bin?"
  }];
}
const workshopImages = ["images/plastic-fantastic/plastic_fantastic_001.jpg", "images/plastic-fantastic/plastic_fantastic_002.jpg", "images/plastic-fantastic/plastic_fantastic_003.jpg", "images/plastic-fantastic/plastic_fantastic_004.jpg", "images/plastic-fantastic/plastic_fantastic_005.jpg", "images/plastic-fantastic/plastic_fantastic_006.jpg", "images/plastic-fantastic/plastic_fantastic_007.jpg", "images/plastic-fantastic/plastic_fantastic_008.jpg", "images/plastic-fantastic/plastic_fantastic_009.jpg", "images/plastic-fantastic/plastic_fantastic_010.jpg", "images/plastic-fantastic/plastic_fantastic_011.jpg"];
const equipmentImages = ["images/plastic-fantastic/multiple_gallery_plastic-equipment_001.jpg", "images/plastic-fantastic/multiple_gallery_plastic-equipment_002.jpg", "images/plastic-fantastic/multiple_gallery_plastic-equipment_003.jpg", "images/plastic-fantastic/multiple_gallery_plastic-equipment_004.jpg", "images/plastic-fantastic/multiple_gallery_plastic-equipment_005.jpg"];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  }, {Badge, Blockquote, BlockquoteFooter, Centered, Full, Half, Icon, ImageGrid, Logos, MultiSlideGallery, MyPicture, ResultList, TextContent} = _components;
  if (!Badge) _missingMdxReference("Badge");
  if (!Blockquote) _missingMdxReference("Blockquote");
  if (!BlockquoteFooter) _missingMdxReference("BlockquoteFooter");
  if (!Centered) _missingMdxReference("Centered");
  if (!Full) _missingMdxReference("Full");
  if (!Half) _missingMdxReference("Half");
  if (!Icon) _missingMdxReference("Icon");
  if (!ImageGrid) _missingMdxReference("ImageGrid");
  if (!Logos) _missingMdxReference("Logos");
  if (!MultiSlideGallery) _missingMdxReference("MultiSlideGallery");
  if (!MyPicture) _missingMdxReference("MyPicture");
  if (!ResultList) _missingMdxReference("ResultList");
  if (!TextContent) _missingMdxReference("TextContent");
  return createVNode(Fragment, {
    children: ["\n", "\n", "\n", "\n", "\n", createVNode(TextContent, {
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Plastic Fantastic"
        }), " is a brand that brings together eco-activists, designers, and makers to explore plastic recycling and promote its use as a material for product design."]
      })
    }), "\n", createVNode(TextContent, {
      children: createVNode(_components.p, {
        children: [createVNode(Badge, {
          children: "The Problem"
        }), "\nBuilding large-scale waste processing plants in Ukraine is urgently needed, but unfortunately, it’s expensive and time-consuming. Current municipal waste collection systems do not support sorting or recycling. Instead, waste is buried near cities in overcrowded landfills that should have been closed long ago."]
      })
    }), "\n", "\n", createVNode(Blockquote, {
      children: [createVNode(_components.p, {
        children: [createVNode("span", {
          children: "“"
        }), "We see the future in local workshops and sorting stations that\nrecycle secondary raw materials and foster conscious communities around them.\n", createVNode("span", {
          children: "”"
        })]
      }), createVNode(BlockquoteFooter, {
        children: createVNode(_components.p, {
          children: "NGO Eco Misto Chernihiv"
        })
      })]
    }), "\n", createVNode(TextContent, {
      children: [createVNode(_components.h3, {
        id: "whats-in-our-trash-bin",
        children: "What’s in our trash bin?"
      }), createVNode(_components.p, {
        children: "Almost 50% is organic waste that can be composted, 45% is packaging that can be recycled and turned into valuable resources. Only about 5% of household waste needs to be landfilled or incinerated."
      }), createVNode(_components.p, {
        children: "From our experience with separate waste collection, plastic causes the most confusion. First, there are seven different labeling codes, and second, not all plastics are recyclable or accepted by collection points."
      })]
    }), "\n", "\n", createVNode(Centered, {
      children: createVNode(ImageGrid, {
        children: createVNode(Full, {
          src: plasticTypes
        })
      })
    }), "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "Our Approach"
      }), createVNode(_components.p, {
        children: "The Plastic Fantastic workshop in Chernihiv operates as a Fab Lab within the Peremoha Lab makerspace at the Chernihiv Polytechnic National University. Designers, architects, and inventors have access to a plastic shredder, thermo press, injector, and extruder to craft new “fantastic” recycled objects."
      }), createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "We run open tours and workshops on working with recycled plastic, encouraging responsible consumption and separate collection of plastic waste."
        })
      })]
    }), "\n", createVNode(MultiSlideGallery, {
      imagePaths: equipmentImages,
      orientation: "square",
      children: createVNode(_components.p, {
        children: "Plastic Fantastic workshop equipment"
      })
    }), "\n", createVNode(TextContent, {
      children: [createVNode(_components.p, {
        children: [createVNode(Badge, {
          children: "Local Impact"
        }), "\nOnce a month, we host an open day at the Plastic Fantastic recycling workshop, where we accept clean and dry HDPE type 2 plastic for recycling. More than 30 kindergartens in Chernihiv collect plastic as part of our long-term “Caps for Toys” initiative."]
      }), createVNode(_components.p, {
        children: "HDPE type 2 (high-density polyethylene) is a food-grade, non-toxic plastic that can be recycled an unlimited number of times. It’s commonly found in bottle caps, hygiene product containers, and household cleaning bottles. We accept HDPE every first Saturday of the month, as announced via our Telegram bot."
      }), createVNode(_components.p, {
        children: "Recycling and conscious consumption are core values of our project. While global fashion brands are turning waste into trendy wardrobe pieces, other industries still lack high-quality recycled products. In many cases, recycled waste becomes just another form of waste that does little to improve everyday life or reduce pollution. That’s why we follow not only an aesthetic but a systematic approach to bringing our ideas to life."
      }), createVNode(_components.p, {
        children: createVNode(_components.strong, {
          children: "Looking ahead, we dream of creating a platform that unites workshops and makers across Ukraine — a space for sharing knowledge, experience, and supporting those taking their first steps into recycling."
        })
      })]
    }), "\n", "\n", createVNode(Centered, {
      children: createVNode(ImageGrid, {
        children: [createVNode(Half, {
          src: product1,
          orientation: "portrait"
        }), createVNode(Half, {
          src: product2,
          orientation: "portrait"
        }), createVNode(Half, {
          src: product3,
          orientation: "portrait"
        }), createVNode(Half, {
          src: product4,
          orientation: "portrait"
        })]
      })
    }), "\n", "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "What We Offer"
      }), createVNode(ResultList, {
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Handcrafted Plastic Fantastic products."
          }), "\n", createVNode(_components.li, {
            children: "Recycled plastic sheets in various thicknesses and designs."
          }), "\n", createVNode(_components.li, {
            children: "Individual and group recycling workshops for kids and adults."
          }), "\n", createVNode(_components.li, {
            children: "Guided tours for school and university groups."
          }), "\n", createVNode(_components.li, {
            children: "Volunteer and internship opportunities."
          }), "\n", createVNode(_components.li, {
            children: "Research and practice opportunities for thesis and course projects."
          }), "\n"]
        })
      })]
    }), "\n", " ", "\n", createVNode(Logos, {
      children: [createVNode(Icon, {
        name: "donors-transition"
      }), createVNode("div", {
        class: "donor-logo",
        children: createVNode(MyPicture, {
          src: gizLogo,
          width: 300,
          alt: "GIZ logo"
        })
      }), createVNode(Icon, {
        name: "partners-politehnika-original"
      }), createVNode(Icon, {
        name: "partners-ostriv-original"
      }), createVNode(Icon, {
        name: "partners-zelenew-original"
      }), createVNode(Icon, {
        name: "partners-tolocar-original"
      })]
    }), "\n", createVNode(MultiSlideGallery, {
      imagePaths: workshopImages,
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

const url = "src/content/projects/en/plastic-fantastic.mdx";
const file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/plastic-fantastic.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/plastic-fantastic.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, equipmentImages, file, frontmatter, getHeadings, url, workshopImages };
