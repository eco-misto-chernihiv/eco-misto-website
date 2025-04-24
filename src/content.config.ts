import { defineCollection, z } from "astro:content";

// Loaders
import { glob, file } from "astro/loaders";

const members = defineCollection({
  loader: file("./src/content/team/team.json"),
  schema: ({ image }) =>
    z.object({
      // TODO: Validate
      name: z.string(),
      position: z.string(),
      // validate as a local image
      // Image should be at least 640 px
      picture: image(),
      indexId: z.number(),
    }),
});

// const colorOptions = ["primary", "secondary", "accent"] as const;
const monthOptions = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
] as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      id: z.string().optional(),
      title: z.string().max(38, {
        message: "Title cannot be longer that 38 characters",
      }),
      description: z
        .string()
        .max(280, {
          message: "Description cannot be longer than 280 characters",
        })
        .optional(),
      // validate as a local image
      cover: z.object({
        // Cover should be 1120px
        image: image(),
        alt: z.string(),
      }),
      // color: z.enum(colorOptions).optional(),
      pubDate: z.date(),
      isActive: z.boolean(),
      isCollage: z.boolean().optional(),
      isDraft: z.boolean().optional(),
      startYear: z.number().optional(),
      startMonth: z.enum(monthOptions).optional(),
      endYear: z.number().optional(),
      endMonth: z.enum(monthOptions).optional(),
      period: z
        .object({
          startYear: z.number(),
          startMonth: z.enum(monthOptions),
          endYear: z.number(),
          endMonth: z.enum(monthOptions),
        })
        .optional(),
    }),
});

export const collections = {
  members,
  projects,
};
