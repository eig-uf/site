import { MovedPage } from "@/components/MovedPage";
import { noIndexMetadata } from "@/lib/seo";

export const metadata = noIndexMetadata("/");

export default function ResourcesPage() {
  return <MovedPage href="/" label="home" />;
}
