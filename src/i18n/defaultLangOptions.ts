export const Languages = [
  {
    name: "ua",
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
