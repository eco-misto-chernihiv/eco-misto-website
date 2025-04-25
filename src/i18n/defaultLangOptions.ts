export const Languages = [
  {
    name: "en",
    value: "en",
  },
  {
    name: "ua",
    value: "uk",
  },
] as const;

export const defaultLanguage = "uk";

// Easily pick language
export type Lang = (typeof Languages)[number]["value"];
