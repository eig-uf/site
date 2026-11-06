"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BlogCategoryBadge } from "@/components/BlogCategoryBadge";
import { formatPostDate, type BlogPost } from "@/data/blog";

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((post) => {
      const haystack = [
        post.title,
        post.description,
        post.category,
        ...post.authors,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, query]);

  return (
    <div className="mx-auto w-full max-w-4xl">
      <h1 className="text-[clamp(2.25rem,8vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
        News
      </h1>

      <label className="relative mt-5 block sm:mt-6">
        <span className="sr-only">Search news posts</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search News Posts"
          className="w-full !rounded-md border border-border bg-transparent py-2.5 pr-3 pl-10 text-sm text-foreground outline-none placeholder:text-muted focus:border-foreground/40"
        />
      </label>

      <div className="mt-8 border-t border-border sm:mt-10">
        {filtered.length === 0 ? (
          <p className="py-10 text-sm text-muted">No posts match that search.</p>
        ) : (
          filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b border-border py-8 sm:py-10"
            >
              <h2 className="text-[1.35rem] font-medium leading-snug tracking-[-0.03em] transition-colors group-hover:text-muted sm:text-[1.65rem] sm:leading-[1.25]">
                {post.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:mt-4 sm:text-[0.95rem] sm:leading-relaxed">
                {post.description}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <BlogCategoryBadge category={post.category} />
                <time
                  dateTime={post.date}
                  className="text-xs text-muted sm:text-sm"
                >
                  {formatPostDate(post.date)}
                </time>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
