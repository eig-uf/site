import Link from "next/link";

export function MovedPage({ href, label }: { href: string; label: string }) {
  return (
    <section className="page-shell py-16">
      <meta httpEquiv="refresh" content={`0; url=${href}`} />
      <h1 className="text-xl font-medium tracking-[-0.03em]">
        This page has moved.
      </h1>
      <p className="mt-3 text-muted">
        Continue to{" "}
        <Link href={href} className="underline underline-offset-4">
          {label}
        </Link>
        .
      </p>
    </section>
  );
}
