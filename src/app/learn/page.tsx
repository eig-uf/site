import { MovedPage } from "@/components/MovedPage";
import { noIndexMetadata } from "@/lib/seo";

export const metadata = noIndexMetadata("/");

export default function LearnPage() {
  return <MovedPage href="/" label="home" />;
}
