import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_-TgDsRa7.mjs';

/*prettier-ignore*/
/*prettier-ignore*/
const frontmatter = {
  "title": "City Makers",
  "description": "An educational project exploring how digital technologies and CNC machines can power post-war recovery and rebuilding.",
  "pubDate": "2024-05-20T00:00:00.000Z",
  "cover": {
    "image": "../images/city-makers/multiple_gallery_city-makers_004.jpg",
    "alt": "Опис"
  },
  "isActive": false,
  "period": {
    "startYear": 2024,
    "startMonth": "February",
    "endYear": 2024,
    "endMonth": "July"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "to-boost-youth-engagement-and-empower-young-people-in-chernihiv-region-to-apply-their-skills-in-ukraines-recovery-and-development",
    "text": "To boost youth engagement and empower young people in Chernihiv region to apply their skills in Ukraine’s recovery and development."
  }];
}
const cityMakersImages = ["images/city-makers/multiple_gallery_city-makers_001.jpg", "images/city-makers/multiple_gallery_city-makers_002.jpg", "images/city-makers/multiple_gallery_city-makers_003.jpg", "images/city-makers/multiple_gallery_city-makers_004.jpg", "images/city-makers/multiple_gallery_city-makers_005.jpg", "images/city-makers/multiple_gallery_city-makers_006.jpg", "images/city-makers/multiple_gallery_city-makers_007.jpg", "images/city-makers/multiple_gallery_city-makers_008.jpg", "images/city-makers/multiple_gallery_city-makers_009.jpg", "images/city-makers/multiple_gallery_city-makers_010.jpg", "images/city-makers/multiple_gallery_city-makers_011.jpg"];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  }, {Badge, Blockquote, BlockquoteFooter, Icon, Logos, MultiSlideGallery, ResultList, TextContent, Video} = _components;
  if (!Badge) _missingMdxReference("Badge");
  if (!Blockquote) _missingMdxReference("Blockquote");
  if (!BlockquoteFooter) _missingMdxReference("BlockquoteFooter");
  if (!Icon) _missingMdxReference("Icon");
  if (!Logos) _missingMdxReference("Logos");
  if (!MultiSlideGallery) _missingMdxReference("MultiSlideGallery");
  if (!ResultList) _missingMdxReference("ResultList");
  if (!TextContent) _missingMdxReference("TextContent");
  if (!Video) _missingMdxReference("Video");
  return createVNode(Fragment, {
    children: ["\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Goal"
      }), createVNode(_components.h2, {
        id: "to-boost-youth-engagement-and-empower-young-people-in-chernihiv-region-to-apply-their-skills-in-ukraines-recovery-and-development",
        children: "To boost youth engagement and empower young people in Chernihiv region to apply their skills in Ukraine’s recovery and development."
      })]
    }), "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Process"
      }), createVNode(_components.p, {
        children: "Based at the Peremoha Center for Startups and Innovation at Chernihiv Polytechnic National University, students explored modern technologies and used their newly gained knowledge to create their own project works focused on the recovery and development of Chernihiv."
      }), createVNode(_components.p, {
        children: "The target audience included university students majoring in “Construction and Civil Engineering”, “Architecture and Urban Planning”, “Environmental Design”, and “Geodesy and Land Management” — as well as proactive young people eager to join the educational course offered by the project."
      }), createVNode(_components.p, {
        children: "The program featured excursions, lectures, and hands-on workshops on modeling, laser cutting, 3D printing, 3D scanning, and recycling."
      }), createVNode(_components.p, {
        children: "The “City Makers” Forum was the final event, showcasing the results of the course and models of real urban concept projects developed using the digital tools of the Peremoha Center. Guest speakers highlighted the importance of youth engagement in the recovery and reconstruction of cities, while interactive zones offered visitors the chance to try out VR technology and work hands-on with a CNC plotter."
      })]
    }), "\n", createVNode(Video, {
      src: "https://www.youtube.com/embed/xFWybstq20E?si=aRMq0CnvsaLBa8Fk"
    }), "\n", "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "The Results"
      }), createVNode(ResultList, {
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "15 excursions held with the participation of 300 school and university students."
          }), "\n", createVNode(_components.li, {
            children: "3 educational courses organized for 50 young participants."
          }), "\n", createVNode(_components.li, {
            children: "10 lectures delivered on the topic of post-war reconstruction."
          }), "\n", createVNode(_components.li, {
            children: "20 workshops held on working with digital tools and machines."
          }), "\n", createVNode(_components.li, {
            children: "The “City Makers” Forum brought together 155 participants."
          }), "\n", createVNode(_components.li, {
            children: "A 3D printing lab was fully equipped."
          }), "\n", createVNode(_components.li, {
            children: "A CNC milling lab was set up and equipped."
          }), "\n"]
        })
      })]
    }), "\n", createVNode(Blockquote, {
      children: [createVNode(_components.p, {
        children: [createVNode("span", {
          children: "“"
        }), "All the models presented at the forum can be built right here at Peremoha Lab by hand. The students have gained the skills and knowledge to build machines using CNC tools, to operate them, and to improve them.", createVNode("span", {
          children: "”"
        })]
      }), createVNode(BlockquoteFooter, {
        children: [createVNode(_components.p, {
          children: "Konstantin Leonenko"
        }), createVNode(_components.p, {
          children: "Secretary of Fab Foundation Europe"
        })]
      })]
    }), "\n", createVNode(Logos, {
      children: [createVNode(Icon, {
        name: "donors-usaid"
      }), createVNode(Icon, {
        name: "partners-politehnika-original"
      }), createVNode(Icon, {
        name: "donors-usaid"
      }), createVNode(Icon, {
        name: "partners-politehnika-original"
      }), createVNode(Icon, {
        name: "donors-usaid"
      }), createVNode(Icon, {
        name: "partners-politehnika-original"
      })]
    }), "\n", createVNode(MultiSlideGallery, {
      imagePaths: cityMakersImages,
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

const url = "src/content/projects/en/city-makers.mdx";
const file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/city-makers.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/en/city-makers.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, cityMakersImages, Content as default, file, frontmatter, getHeadings, url };
