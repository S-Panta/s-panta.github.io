import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { sections } from "./sections";

const schema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
  description: z.string(),
  author: z.string().default("Sabin Panta"),
});

export const collections = Object.fromEntries(
  sections.map((s) => [
    s.name,
    defineCollection({
      loader: glob({ pattern: "**/*.md", base: `./src/content/${s.name}` }),
      schema,
    }),
  ]),
);
