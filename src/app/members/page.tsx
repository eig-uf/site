import type { Metadata } from "next";
import { MemberCard } from "@/components/MemberCard";
import { MemberGridSection } from "@/components/MemberGridSection";
import { MembersAsciiArt } from "@/components/MembersAsciiArt";
import { PageHeader } from "@/components/PageHeader";
import { RobotCard } from "@/components/RobotCard";
import { members } from "@/data/members";
import { robots } from "@/data/robots";

export const metadata: Metadata = {
  title: "Members & Robots | Embodied Intelligence Group",
  description:
    "Meet the members and robots of the Embodied Intelligence Group at the University of Florida.",
};

export default function MembersPage() {
  return (
    <main>
      <PageHeader
        compact
        label="Members"
        title="Meet the Team"
        description="The people and hardware behind EIG at UF."
      />

      <MemberGridSection
        compact
        title="The people"
        delayClass="animate-fade-up animate-fade-up-delay-3"
      >
        {members.map((member, index) => (
          <MemberCard key={index} member={member} compact />
        ))}
      </MemberGridSection>

      <MemberGridSection
        compact
        title="The robots"
        delayClass="animate-fade-up animate-fade-up-delay-4 border-t border-border"
        aside={<MembersAsciiArt />}
      >
        {robots.map((robot, index) => (
          <RobotCard key={index} robot={robot} compact />
        ))}
      </MemberGridSection>
    </main>
  );
}
