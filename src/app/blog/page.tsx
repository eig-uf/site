import { BlogIndex } from "@/components/BlogIndex";
import { getAllPosts } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "News",
  description:
    "Notes from the Embodied Intelligence Group at the University of Florida on robot learning, physical AI, and ARM0.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <section>
      <div className="page-shell py-10 sm:py-14 md:py-16">
        <BlogIndex posts={getAllPosts()} />
      </div>
    </section>
  );
}
