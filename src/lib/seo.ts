import type { Metadata } from "next";
import { siteName, siteUrl } from "@/lib/site";

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = new URL(path, siteUrl).toString();

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName,
    },
    twitter: {
      title,
      description,
    },
  };
}

export function noIndexMetadata(canonicalPath: string): Metadata {
  return {
    robots: { index: false, follow: true },
    alternates: { canonical: canonicalPath },
  };
}
