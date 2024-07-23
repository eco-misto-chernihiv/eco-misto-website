export const baseData = {
  title: "Громадська організація “Еко Місто”",
  description:
    "Популяризуємо розвиток мейкерства, ресайклінга та підтримуємо велосипедний рух в Чернігові.",
};

export const navData = [
  {
    title: "Проєкти",
    href: "/projects",
  },
  {
    title: "Контакти",
    href: "#contacts",
  },
];

export const achievmentsData = [
  {
    title: "424",
    description: "креативних заходів організовано",
    id: "primary",
    "left-translateX": "-100%",
    "right-translateX": "100%",
    "right-rotate": "270deg",
  },
  {
    title: "712",
    description: "соціальних велосипедів видано",
    id: "primary-light",
    "left-translateX": "-100%",
    "right-translateX": "100%",
    "left-rotate": "90deg",
    "right-rotate": "180deg",
  },
  {
    title: "7",
    description: "публічних просторів ревіталізовано",
    id: "accent",
    "left-translateX": "-100%",
    "right-translateX": "100%",
    "left-rotate": "90deg",
    "right-rotate": "180deg",
  },
];

export const socialData = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/eco_misto",
    icon: "icon-instagram",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/eco.cn.ua",
    icon: "icon-facebook",
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@eco-misto",
    icon: "icon-youtube",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/eco-misto",
    icon: "icon-linkedin",
  },
];

export const contactsData = [
  {
    description: "+38 093 790 90 94",
    icon: "icon-phone",
    href: "tel:+380937909094",
  },
  {
    description: "info@ecomisto.org",
    icon: "icon-mail",
    href: "mailto:info@ecomisto.org",
  },
  {
    description: "м. Чернігів, проспект Левка Лук'яненка 2А",
    icon: "icon-pin",
    href: "https://maps.app.goo.gl/6NF8PMSFEzigDxkg7",
  },
];

export const cooperationData = [
  {
    label: "Мене звати *",
    formControl: "input",
    name: "name",
    placeholder: "Костя",
    type: "text",
    required: true,
    pattern: "^[A-Za-zА-Яа-я0-9 ]{2,20}$",
  },
  {
    label: "Я з організації *",
    formControl: "input",
    name: "organization",
    placeholder: "Platforma",
    type: "text",
    required: true,
    pattern: "^[A-Za-zА-Яа-я0-9 ]{2,80}$",
  },
  {
    label: "Я хотів/ла би обговорити *",
    formControl: "textarea",
    name: "message",
    placeholder: "Розкажіть про вашу ідею",
    required: true,
    rows: "3",
  },
  {
    label: "Я дізнався/лася про вашу організацію",
    formControl: "input",
    name: "source",
    placeholder: "Я дізнався з соцмереж.",
    type: "text",
  },
  {
    label: "Дайте відповідь мені на мою пошту *",
    formControl: "input",
    name: "email",
    placeholder: "kostya@gmail.com",
    type: "email",
    required: true,
    pattern: "^[^@]+@[^@]+.[^@]+$",
  },
];

export const donateData = [
  {
    label: "Введіть суму *",
    formControl: "input",
    name: "number",
    placeholder: "0",
    type: "number",
    required: true,
    min: "0",
    // pattern: "^[^@]+@[^@]+.[^@]+$",
  },
  {
    label: "Ваша пошта *",
    formControl: "input",
    name: "email",
    placeholder: "marusya@gmail.com",
    type: "email",
    required: true,
    pattern: "^[^@]+@[^@]+.[^@]+$",
  },
];
