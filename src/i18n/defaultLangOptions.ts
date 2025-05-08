export const Languages = [
  {
    name: "ua",
    value: "ua",
  },
  {
    name: "en",
    value: "en",
  },
] as const;

export const defaultLanguage = "ua";

// Easily pick language
export type Lang = (typeof Languages)[number]["value"];
