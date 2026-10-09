export const sections = [
  { name: "blog", label: "Blog", heading: "Curious stuff" },
  { name: "readings", label: "Readings", heading: "Reading notes" },
  { name: "researchdiary", label: "Research Diary", heading: "What I learned" },
] as const;

export type Section = (typeof sections)[number];
