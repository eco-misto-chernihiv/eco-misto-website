import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_-TgDsRa7.mjs';
import { i as iakLogo } from './logo-iak_CHGUWL1v.mjs';

/*Should start with 'images'*/
/*prettier-ignore*/
/*prettier-ignore*/
const frontmatter = {
  "title": "DIY For Climate",
  "description": "Міжнародний проєкт, що об’єднав молодь із чотирьох країн для спільних дій з адаптації міст до кліматичних змін.",
  "pubDate": "2024-05-17T00:00:00.000Z",
  "cover": {
    "image": "../images/diy-for-climate/multiple_gallery_diy-for-climate_001.jpg",
    "alt": "Опис"
  },
  "isActive": false,
  "period": {
    "startYear": 2022,
    "startMonth": "Вересень",
    "endYear": 2022,
    "endMonth": "Грудень"
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "сприяти-екологічній-відповідальності-та-стійкості-залучаючи-громадян-до-сталих-diy-практик-і-проєктів-що-протидіють-зміні-клімату-через-практичні-дії-та-освітні-ініціативи",
    "text": "Сприяти екологічній відповідальності та стійкості, залучаючи громадян до сталих DIY-практик і проєктів, що протидіють зміні клімату через практичні дії та освітні ініціативи."
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
        children: "Мета"
      }), createVNode(_components.h2, {
        id: "сприяти-екологічній-відповідальності-та-стійкості-залучаючи-громадян-до-сталих-diy-практик-і-проєктів-що-протидіють-зміні-клімату-через-практичні-дії-та-освітні-ініціативи",
        children: "Сприяти екологічній відповідальності та стійкості, залучаючи громадян до сталих DIY-практик і проєктів, що протидіють зміні клімату через практичні дії та освітні ініціативи."
      })]
    }), "\n", createVNode(TextContent, {
      children: [createVNode(_components.p, {
        children: [createVNode(Badge, {
          children: "Процес"
        }), "\nПроєкт тривав чотири місяці, об’єднавши молодь із чотирьох країн для адаптації міст до змін клімату та зменшення вуглецевого сліду. У ньому взяли участь 24 молодих представники громад із Німеччини, України, Молдови та Білорусі. На першому етапі учасники пройшли онлайн-знайомство з фасилітатором для ефективної співпраці. Далі відбулися три навчальні вебінари, де вони дізналися про виклики кліматичних змін і способи адаптації міст."]
      }), createVNode(_components.p, {
        children: "Кульмінацією стало 7-денне стажування в Берліні, під час якого учасники навчалися впроваджувати DIY-рішення для сталого розвитку міст. Після цього вони провели практичні воркшопи у своїх громадах, поширюючи знання та залучаючи місцевих жителів до ініціатив, що спрямовані на захист довкілля."
      })]
    }), "\n", createVNode(Video, {
      src: "https://www.youtube.com/embed/rJ0_glaxXBA?si=SFk7wAYT5xI_O-1F"
    }), "\n", createVNode(TextContent, {
      children: createVNode(_components.p, {
        children: "Для поширення результатів було створено сім тематичних відео й багатомовний посібник «DIY-рішення для міського садівництва», що доступний всім зацікавленим. Завершився проєкт онлайн-форумом, де учасники та учасниці представили свої досягнення та поділилися планами на майбутнє."
      })
    }), "\n", createVNode(Centered, {
      children: createVNode(SingleSlideGallery, {
        imagePaths: diyForClimatePDF,
        orientation: "landscape",
        children: [createVNode(_components.p, {
          children: "Переглянути та завантажити посібник можна за посиланням:"
        }), createVNode(Link, {
          href: "https://plato.lviv.ua/wp-content/uploads/2023/01/diy-rishennya.pdf",
          isHovered: true,
          hoverHeight: "1px",
          isExternal: true,
          target: "_blank",
          children: createVNode(_components.p, {
            children: "DIY Рішення. Для міського садівництва"
          })
        })]
      })
    }), "\n", createVNode(TextContent, {
      children: createVNode(_components.p, {
        children: "Цей проєкт не лише дав молоді знання, а й забезпечив практичними інструментами для сталого розвитку їхніх громад, зменшуючи вуглецевий слід і сприяючи адаптації до кліматичних змін."
      })
    }), "\n", "\n", createVNode(TextContent, {
      children: [createVNode(Badge, {
        children: "Результат"
      }), createVNode(ResultList, {
        children: createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "24 молодих експерти у сфері міського розвитку та планування з Німеччини, України, Молдови та Білорусі дослідили тему змін клімату в містах."
          }), "\n", createVNode(_components.li, {
            children: "Організовано 4 практичні воркшопи по DIY-рішенням для адаптації міст до змін клімату."
          }), "\n", createVNode(_components.li, {
            children: "Розроблено посібник «DIY-рішення для міського садівництва»."
          }), "\n", createVNode(_components.li, {
            children: "Відзнято та опубліковано 7 відео з міських воркшопів з інтерв’ю учасників на тему проєкту."
          }), "\n", createVNode(_components.li, {
            children: "Роботи груп учасників представлено на онлайн-форумі «DIY For Climate»."
          }), "\n"]
        })
      })]
    }), "\n", createVNode(Blockquote, {
      children: [createVNode(_components.p, {
        children: [createVNode("span", {
          children: "«"
        }), "Втілення кращих практик міського городництва дозволить містам ставати більш самозарадними та стійкими до нових викликів воєнного часу, зокрема до ризиків продовольчої безпеки.", createVNode("span", {
          children: "»"
        })]
      }), createVNode(BlockquoteFooter, {
        children: [createVNode(_components.p, {
          children: "Тетяна Лебухорська"
        }), createVNode(_components.p, {
          children: "ініціатива «Сади Перемоги» проєкту SURGe"
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

const url = "src/content/projects/ua/diy-for-climate.mdx";
const file = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/ua/diy-for-climate.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/content/projects/ua/diy-for-climate.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, diyForClimateMultiSlideImages, diyForClimatePDF, file, frontmatter, getHeadings, url };
