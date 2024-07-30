import { defineCollection, z } from "astro:content";

const members = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      // TODO: Validate
      name: z.string(),
      position: z.string(),
      // validate as a local image
      picture: image().refine((img) => img.width >= 640, {
        message: "Portait should be at least 640px wide or more",
      }),
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
  type: "content",
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
      cover: image().refine((img) => img.width >= 1120, {
        message: "Cover should be at least 1120px wide or more",
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
