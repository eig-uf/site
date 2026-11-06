import { MovedPage } from "@/components/MovedPage";
import { noIndexMetadata } from "@/lib/seo";

export const metadata = noIndexMetadata("/contact");

export default function JoinPage() {
  return <MovedPage href="/contact" label="contact" />;
}
