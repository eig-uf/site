import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogBody } from "@/components/BlogBody";
import { BlogCategoryBadge } from "@/components/BlogCategoryBadge";
import { formatPostDate, getAllPosts, getPost } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Post" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div className="page-shell py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            ← News
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <BlogCategoryBadge category={post.category} />
            <time dateTime={post.date} className="text-sm text-muted">
              {formatPostDate(post.date)}
            </time>
            <span className="text-sm text-muted">{post.authors.join(", ")}</span>
          </div>

          <h1 className="mt-5 text-[clamp(1.85rem,5vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.04em]">
            {post.title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {post.description}
          </p>

          <div className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
            <BlogBody blocks={post.body} />
          </div>
        </div>
      </div>
    </article>
  );
}
