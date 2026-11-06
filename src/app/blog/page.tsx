import type { Metadata } from "next";
import { BlogIndex } from "@/components/BlogIndex";
import { getAllPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "News",
  description:
    "Project notes, model evals, and research logs from the Embodied Intelligence Group at UF.",
};

export default function BlogPage() {
  return (
    <section>
      <div className="page-shell py-10 sm:py-14 md:py-16">
        <BlogIndex posts={getAllPosts()} />
      </div>
    </section>
  );
}
