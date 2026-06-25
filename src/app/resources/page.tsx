import type { Metadata } from "next";
import { Resources } from "@/components/Resources";
import { ResourcesPageHeader } from "@/components/ResourcesPageHeader";

export const metadata: Metadata = {
  title: "Resources | Embodied Intelligence Group",
  description:
    "EIG workshops on GitHub, plus papers, courses, and tools for learning embodied AI and robotics.",
};

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesPageHeader />
      <Resources />
    </main>
  );
}
