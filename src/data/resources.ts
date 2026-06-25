export type Resource = {
  category: string;
  title: string;
  description: string;
  href: string;
};

export const clubResources: Resource[] = [
  {
    category: "Workshop",
    title: "Workshop name",
    description: "Workshop materials and code on GitHub.",
    href: "https://github.com/",
  },
  {
    category: "Workshop",
    title: "Workshop name (2)",
    description: "Workshop materials and code on GitHub.",
    href: "https://github.com/",
  },
  {
    category: "Workshop",
    title: "Workshop name (3)",
    description: "Workshop materials and code on GitHub.",
    href: "https://github.com/",
  },
];

export const externalResources: Resource[] = [
  {
    category: "Research",
    title: "Resource name",
    description: "Short description placeholder.",
    href: "#",
  },
  {
    category: "Course",
    title: "Resource name",
    description: "Short description placeholder.",
    href: "#",
  },
  {
    category: "Tools",
    title: "Resource name",
    description: "Short description placeholder.",
    href: "#",
  },
  {
    category: "Simulation",
    title: "Resource name",
    description: "Short description placeholder.",
    href: "#",
  },
  {
    category: "Book",
    title: "Resource name",
    description: "Short description placeholder.",
    href: "#",
  },
];
