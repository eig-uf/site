import { MovedPage } from "@/components/MovedPage";
import { noIndexMetadata } from "@/lib/seo";

export const metadata = noIndexMetadata("/");

export default function ProjectsPage() {
  return <MovedPage href="/" label="home" />;
}
