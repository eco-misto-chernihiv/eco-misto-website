import loadDirective from "astro/runtime/client/load.js";
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

const colorOptions = ["primary", "secondary", "accent "] as const;

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(38, {
        message: "Title cannot be longer that 38 characters",
      }),
      description: z.string().max(65, {
        message: "Description cannot be longer that 65 characters",
      }),
      // validate as a local image
      image: image().refine((img) => img.width >= 500, {
        message: "Image should be at least 1000px wide or more",
      }),
      isCollage: z.boolean().optional(),
      color: z.enum(colorOptions).optional(),
      pubDate: z.date(),
      isActive: z.boolean(),
      isDraft: z.boolean().optional(),
    }),
});

export const collections = {
  members,
  projects,
};
