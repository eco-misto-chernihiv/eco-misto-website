import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_-TgDsRa7.mjs';

/*Should start with 'images'*/
/*prettier-ignore*/
const frontmatter = {
  "title": "Velolink",
  "description": "An infrastructure project for cyclists and city residents, created using the tools and methods of tactical urbanism.",
  "pubDate": "2024-05-19T00:00:00.000Z",
  "cover": {
    "image": "../images/velolink/gallery_velolink_001.jpg",
    "alt": "alt"
  },
  "isActive": false,
  "period": {
    "startYear": 2023,
    "startMonth": "May",
    "endYear": 2024,
    "endMonth": "May"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "create-a-public-space-improve-cycling-infrastructure",
    "text": "Create a public space, improve cycling infrastructure."
  }];
}
const velolinkImages = ["images/velolink/gallery_velolink_001.jpg", "images/velolink/gallery_velolink_002.jpg", "images/velolink/gallery_velolink_003.jpg", "images/velolink/gallery_velolink_004.jpg", "images/velolink/gallery_velolink_005.jpg", "images/velolink/gallery_velolink_006.jpg", "images/velolink/gallery_velolink_007.jpg", "images/velolink/gallery_velolink_008.jpg", "images/velolink/gallery_velolink_009.jpg", "images/velolink/gallery_velolink_010.jpg", "images/velolink/gallery_velolink_011.jpg", "images/velolink/gallery_velolink_012.jpg"];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, {Badge, Blockquote, BlockquoteFooter, Icon, Logos, MultiSlideGallery, ResultList, TextContent} = _components;
  if (!Badge) _missingMdxReference("Badge");
  if (!Blockquote) _missingMdxReference("Blockquote");
  if (!BlockquoteFooter) _missingMdxReference("BlockquoteFooter");
  if (!Icon) _missingMdxReference("Icon");
  if (!Logos) _missingMdxReference("Logos");
  if (!MultiSlideGallery) _missingMdxReference("MultiSlideGallery");
  if (!ResultList) _missingMdxReference("ResultList");
  if (!TextContent) _missingMdxReference("TextContent");
  return createVNode(Fragment, {
    children: ["\n", "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Goal"
      }), createVNode(_components.h2, {
        id: "create-a-public-space-improve-cycling-infrastructure",
        children: "Create a public space, improve cycling infrastructure."
      })]
    }), "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Process"
      }), createVNode(_components.p, {
        children: "The NGO Eco Misto and the company Glovo, in cooperation with the Chernihiv City Council, implemented a joint infrastructure project for cyclists and city residents as part of a signed Memorandum of Cooperation. This is the first comprehensive public space project of its kind in Ukraine, developed using tools and methods of tactical urbanism."
      }), createVNode(_components.p, {
        children: "The urban zone design was developed by the “Ostriv” platform in line with Glovo’s visual identity, incorporating its signature yellow and green colors."
      }), createVNode(_components.p, {
        children: "The project is part of Glovo Acts, a long-term sustainability initiative for Ukrainian cities, aimed at improving public spaces."
      })]
    }), "\n", "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Results"
      }), createVNode(ResultList, {
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "A new Traffic Management Plan was developed."
          }), "\n", createVNode(_components.li, {
            children: "200 meters of bike lane marked, including 4 bike crossings."
          }), "\n", createVNode(_components.li, {
            children: "A self-service bicycle repair pavilion was built."
          }), "\n", createVNode(_components.li, {
            children: "Container landscaping and small architectural forms were installed."
          }), "\n"]
        })
      })]
    }), "\n", createVNode(Blockquote, {
      children: [createVNode(_components.p, {
        children: [createVNode("span", {
          children: "“"
        }), "This was the first initiative we developed under the Glovo Acts program. We chose to start with Chernihiv, a city heavily affected by the fighting.", createVNode("span", {
          children: "”"
        })]
      }), createVNode(BlockquoteFooter, {
        children: [createVNode(_components.p, {
          children: "Maryna Pavliuk"
        }), createVNode(_components.p, {
          children: "General Manager of Glovo in Ukraine"
        })]
      })]
    }), "\n", createVNode(TextContent, {
      children: createVNode(_components.p, {
        children: "The public space is located at 35 Levko Lukianenko Avenue, near the former\n“Siverskyi” store, and is open to all residents and visitors of Chernihiv to\npromote an active lifestyle."
      })
    }), "\n", createVNode(Logos, {
      children: [createVNode(Icon, {
        name: "partners-glovo"
      }), createVNode(Icon, {
        name: "partners-eid"
      }), createVNode(Icon, {
        name: "partners-ostriv-original"
      }), createVNode(Icon, {
        name: "partners-chernigiv-city-council"
      }), createVNode(Icon, {
        name: "partners-politehnika-original"
      })]
    }), "\n", createVNode(MultiSlideGallery, {
      imagePaths: velolinkImages,
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

const url = "src/content/projects/en/velolink.mdx";
const file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/velolink.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/velolink.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url, velolinkImages };
