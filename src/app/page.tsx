import { Hero } from "@/components/Hero";
import { Initiatives } from "@/components/Initiatives";
import { JoinCta } from "@/components/JoinCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Initiatives />
      <JoinCta />
    </main>
  );
}
