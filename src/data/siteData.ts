export const baseData = {
  title: "Eco-misto",
  description:
    "Ecomisto is a non-profit social organization dedicated to promoting environmental sustainability and eco-friendly practices within local communities.",
};

export const navData = [
  {
    title: "Головна",
    href: "/",
  },
  {
    title: "Проєкти",
    href: "/projects",
  },
  {
    title: "Контакти",
    href: "#contacts",
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
    href: "#",
    icon: "icon-linkedin",
  },
];

export const contactsData = [
  {
    description: "+3 067 000 44 33",
    icon: "icon-phone",
  },
  {
    description: "hello@ecomisto.com",
    icon: "icon-mail",
  },
  {
    description:
      "вулиця Шевченка, 95, Чернігів, Чернігівська область, Україна, 14027",
    icon: "icon-pin",
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
    pattern: "^[A-Za-zА-Яа-я0-9 ]{2,20}",
  },
  {
    label: "Я з організації *",
    formControl: "input",
    name: "organization",
    placeholder: "Platforma",
    type: "text",
    required: true,
    pattern: "^[A-Za-zА-Яа-я0-9]{2,40}",
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
    label: "Я дізнався/дізналася про вашу організацію",
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
