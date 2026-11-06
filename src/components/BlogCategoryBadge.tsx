import type { BlogCategory } from "@/data/blog";

const categoryStyles: Record<BlogCategory, string> = {
  General: "bg-red-500/15 text-red-400",
  Software: "bg-blue-500/15 text-blue-400",
  Hardware: "bg-yellow-500/15 text-yellow-400",
};

export function BlogCategoryBadge({ category }: { category: BlogCategory }) {
  return (
    <span
      className={`inline-flex !rounded-full px-3 py-1 text-xs font-medium ${categoryStyles[category]}`}
    >
      {category}
    </span>
  );
}
