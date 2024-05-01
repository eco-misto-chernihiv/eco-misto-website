import { defineCollection, z } from "astro:content";

const members = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      // TODO: Validate
      name: z.string(),
      position: z.string(),
      // validate as a local image
      picture: image(),
    }),
});

export const collections = {
  members,
};
