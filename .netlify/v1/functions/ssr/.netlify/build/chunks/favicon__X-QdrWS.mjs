const baseData = {
  ua: {
    title: "Громадська організація «Еко Місто Чернігів»",
    description: "Популяризуємо розвиток мейкерства, ресайклінга та підтримуємо велосипедний рух в Чернігові."
  },
  en: {
    title: "NGO Eco Misto Chernihiv",
    description: "We promote the development of maker culture, recycling, and support the cycling movement in Chernihiv."
  }
};
const aboutData = {
  ua: {
    p1: "Громадська організація «Еко Місто Чернігів» — це урбаністична ініціатива, спрямована на покращення якості життя через проєкти тактичного урбанізму та формування спільнот.",
    p2: "Наша діяльність включає популяризацію сталих підходів, а саме розвиток мейкерства, ресайклінг та підтримку велосипедного руху в Чернігові."
  },
  en: {
    p1: "Eco Misto Chernihiv is an urban initiative focused on improving quality of life through public space activation and community-building projects.",
    p2: "Our work promotes sustainable practices through maker culture, recycling, and the growth of cycling infrastructure in Chernihiv."
  }
};
const navData = {
  ua: [
    {
      title: "Проєкти",
      href: "/projects"
    },
    {
      title: "Контакти",
      href: "#contacts"
    }
  ],
  en: [
    {
      title: "Projects",
      href: "/projects"
    },
    {
      title: "Contacts",
      href: "#contacts"
    }
  ]
};
const missionData = {
  ua: {
    tag: "Місія",
    text: "Сприяти сталому розвитку Чернігова шляхом впровадження інноваційних та креативних рішень, залучаючи спільноту на всіх рівнях."
  },
  en: {
    tag: "Mission",
    text: "To support the sustainable development of Chernihiv by implementing innovative and creative solutions that engage the community at every level."
  }
};
const partnersData = {
  ua: {
    tag: "Партнери",
    title: "Запрошуємо до співпраці",
    text: "Ми пропонуємо спільно брати участь у соціальних змінах для впровадження сталих підходів у розвитку міст. Свою місію реалізуємо через урбаністичні інтервенції, освітні програми та соціальне підприємництво. Долучайтесь до нас як волонтер або партнер. Разом ми можемо творити зміни!"
  },
  en: {
    tag: "Partners",
    title: "Let’s collaborate",
    text: "We invite you to join us in driving social change and implementing sustainable solutions for urban development through public interventions, education, and social entrepreneurship. Become a partner or volunteer — together we can make a difference."
  }
};
const achievmentsData = {
  ua: [
    {
      title: "637",
      description: "креативних заходів проведено",
      id: "primary",
      "left-translateX": "-100%",
      "right-translateX": "100%",
      "right-rotate": "270deg"
    },
    {
      title: "965",
      description: "соціальних велосипедів видано",
      id: "primary-light",
      "left-translateX": "-100%",
      "right-translateX": "100%",
      "left-rotate": "90deg",
      "right-rotate": "180deg"
    },
    {
      title: "7",
      description: "публічних просторів оновлено",
      id: "accent",
      "left-translateX": "-100%",
      "right-translateX": "100%",
      "left-rotate": "90deg",
      "right-rotate": "180deg"
    }
  ],
  en: [
    {
      title: "637",
      description: "creative events held",
      id: "primary",
      "left-translateX": "-100%",
      "right-translateX": "100%",
      "right-rotate": "270deg"
    },
    {
      title: "965",
      description: "community bikes distributed",
      id: "primary-light",
      "left-translateX": "-100%",
      "right-translateX": "100%",
      "left-rotate": "90deg",
      "right-rotate": "180deg"
    },
    {
      title: "7",
      description: "public spaces revitalized",
      id: "accent",
      "left-translateX": "-100%",
      "right-translateX": "100%",
      "left-rotate": "90deg",
      "right-rotate": "180deg"
    }
  ]
};
const socialData = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/eco_misto",
    icon: "icon-instagram"
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/eco.cn.ua",
    icon: "icon-facebook"
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@eco-misto",
    icon: "icon-youtube"
  },
  {
    title: "Telegram",
    href: "https://t.me/ecochernihivbot",
    icon: "icon-telegram"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/eco-misto",
    icon: "icon-linkedin"
  }
];
const contactsData = {
  ua: [
    {
      description: "info@ecomisto.org",
      icon: "icon-mail",
      href: "mailto:info@ecomisto.org"
    },
    {
      description: "м. Чернігів, проспект Левка Лук'яненка 2А",
      icon: "icon-pin",
      href: "https://maps.app.goo.gl/6NF8PMSFEzigDxkg7"
    }
  ],
  en: [
    {
      description: "info@ecomisto.org",
      icon: "icon-mail",
      href: "mailto:info@ecomisto.org"
    },
    {
      description: "Chernihiv, 2A Levko Lukianenko Avenue",
      icon: "icon-pin",
      href: "https://maps.app.goo.gl/6NF8PMSFEzigDxkg7"
    }
  ]
};
const footerData = {
  ua: {
    copy: "Громадська організація «Еко Місто Чернігів»",
    rights: "Усі права захищені",
    privacyPolicy: "Політика конфіденційності"
  },
  en: {
    copy: "NGO Eco Misto Chernihiv",
    rights: "All rights reserved",
    privacyPolicy: "Privacy policy"
  }
};
const notFoundData = {
  ua: {
    headTitle: "Сторінку не знайдено",
    title: "Упс, сторінку не знайдено",
    description: "Схоже, сторінки, яку ви шукали, не існує. Але ви можете перевірити правильність адреси чи повернутися назад."
  },
  en: {
    headTitle: "Page not found",
    title: "Oops, page not found",
    description: "It looks like the page you were looking for doesn't exist. But you can check the address for accuracy or go back."
  }
};
const cooperationText = {
  ua: {
    title: "Опишіть ваш запит",
    description: "Розкажіть про себе та сформулюйте свою пропозицію, або ідею. Ми постараємось дати відповідь якнайшвидше."
  },
  en: {
    title: "Describe your request",
    description: "Tell us a bit about yourself and outline your idea or proposal. We’ll do our best to get back to you as soon as possible."
  }
};
const cooperationData = {
  ua: [
    {
      label: "Мене звати *",
      formControl: "input",
      name: "name",
      placeholder: "Костя",
      type: "text",
      required: true,
      pattern: "^[A-Za-zА-Яа-я0-9 ]{2,20}$"
    },
    {
      label: "Я з організації *",
      formControl: "input",
      name: "organization",
      placeholder: "Platforma",
      type: "text",
      required: true,
      pattern: "^[A-Za-zА-Яа-я0-9 ]{2,80}$"
    },
    {
      label: "Я хотів/ла би обговорити *",
      formControl: "textarea",
      name: "message",
      placeholder: "Розкажіть про вашу ідею",
      required: true,
      rows: "3"
    },
    {
      label: "Я дізнався/лася про вашу організацію",
      formControl: "input",
      name: "source",
      placeholder: "Я дізнався з соцмереж.",
      type: "text"
    },
    {
      label: "Дайте відповідь мені на мою пошту *",
      formControl: "input",
      name: "email",
      placeholder: "kostya@gmail.com",
      type: "email",
      required: true,
      pattern: "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*"
    }
  ],
  en: [
    {
      label: "My name is *",
      formControl: "input",
      name: "name",
      placeholder: "John",
      type: "text",
      required: true,
      pattern: "^[A-Za-zА-Яа-я0-9 ]{2,20}$"
    },
    {
      label: "I represent the organization *",
      formControl: "input",
      name: "organization",
      placeholder: "Platforma",
      type: "text",
      required: true,
      pattern: "^[A-Za-zА-Яа-я0-9 ]{2,80}$"
    },
    {
      label: "I’d like to discuss *",
      formControl: "textarea",
      name: "message",
      placeholder: "Tell us about the idea",
      required: true,
      rows: "3"
    },
    {
      label: "I found out about your organization from",
      formControl: "input",
      name: "source",
      placeholder: "I found out about your organization from social media",
      type: "text"
    },
    {
      label: "Please reply to my email *",
      formControl: "input",
      name: "email",
      placeholder: "john@gmail.com",
      type: "email",
      required: true,
      pattern: "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~\\-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*"
    }
  ]
};
const donateText = {
  ua: {
    title: "Зробити внесок",
    description: "Усі кошти будуть витрачені на забезпечення адміністративної діяльності громадської організації “Еко Місто Чернігів” та нові інноваційні проєкти для розвитку міста.",
    pay: "Разова допомога",
    subscribe: "Щомісячна підтримка",
    consent: "Даю згоду на обробку персональних даних"
  },
  en: {
    title: "Make a contribution",
    description: "All funds will go toward supporting the administrative activities of NGO Eco Misto Chernihiv and launching new innovative projects for the city's development.",
    pay: "One-time donation",
    subscribe: "Monthly support",
    consent: "I consent to the processing of my personal data"
  }
};
const donateData = {
  ua: [
    {
      label: "Введіть суму *",
      formControl: "input",
      name: "amount",
      placeholder: "0",
      type: "number",
      required: true,
      min: "0"
    },
    {
      label: "Ваша пошта *",
      formControl: "input",
      name: "email",
      placeholder: "marusya@gmail.com",
      type: "text",
      required: true,
      pattern: "^((?!.)[w-_.]*[^.])(@w+)(.w+(.w+)?[^.W])$/gim"
    }
  ],
  en: [
    {
      label: "Enter amount *",
      formControl: "input",
      name: "amount",
      placeholder: "0",
      type: "number",
      required: true,
      min: "0"
    },
    {
      label: "Your email *",
      formControl: "input",
      name: "email",
      placeholder: "marusya@gmail.com",
      type: "text",
      required: true,
      pattern: "^((?!.)[w-_.]*[^.])(@w+)(.w+(.w+)?[^.W])$/gim"
    }
  ]
};
const callToActionData = {
  ua: {
    title: "Подобається, що ми робимо?",
    description: "Ми відкриті до співпраці й будемо раді будь-якій допомозі: пиши, дзвони, донать, долучайся!"
  },
  en: {
    title: "Like what we do?",
    description: "We’re open to collaboration and happy for any support — write to us, call, donate, or get involved!"
  }
};
const buttonsData = {
  ua: {
    support: "Підтримати",
    contact: "Написати",
    send: "Надіслати",
    allProjects: "Усі проєкти",
    view: "Дивитись",
    backToMain: "Назад на головну"
  },
  en: {
    support: "Donate",
    contact: "Contact us",
    send: "Send",
    allProjects: "All projects",
    view: "View",
    backToMain: "Back to main"
  }
};
const workingHoursData = {
  ua: {
    title: `Працюємо<br /> з понеділка по пʼятницю`,
    adress: "Проспект Левка Лук’яненка, 2А",
    place: "Центр «Перемога»"
  },
  en: {
    title: `Open<br /> Monday to Friday`,
    adress: "Levko Lukianenko Avenue, 2A",
    place: "Peremoha Center"
  }
};

const favicon = new Proxy({"src":"/_astro/favicon.2qrMUbFo.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/vladkovac-mbp/Documents/Web Development/eco-misto-website/src/assets/favicon.png";
							}
							
							return target[name];
						}
					});

export { baseData as a, buttonsData as b, aboutData as c, achievmentsData as d, callToActionData as e, favicon as f, navData as g, contactsData as h, footerData as i, donateText as j, donateData as k, cooperationText as l, missionData as m, notFoundData as n, cooperationData as o, partnersData as p, socialData as s, workingHoursData as w };
