export const Languages = [
  {
    name: "uk",
    value: "uk",
  },
  {
    name: "en",
    value: "en",
  },
] as const;

export const defaultLanguage = "uk";

// Easily pick language
export type Lang = (typeof Languages)[number]["value"];
