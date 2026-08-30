import type { Metadata } from "next";
import { socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join the Embodied Intelligence Group at the University of Florida.",
};

export default function JoinPage() {
  return (
    <section className="min-h-[calc(100svh-8rem)]">
      <div className="site-media-breakout py-12 sm:py-24">
        <div className="site-media-width">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Join
          </p>
          <h1 className="mt-6 max-w-5xl text-[clamp(2.25rem,12vw,8rem)] font-medium leading-[0.92] tracking-[-0.065em] sm:mt-8 sm:leading-[0.9]">
            Open to all UF students.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted sm:mt-10 sm:text-base">
            The first EIG project cycle begins Fall 2026. Join the Discord to meet
            the team, suggest a project, or find a group to work with.
          </p>

          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block text-sm underline underline-offset-4 hover:text-muted"
          >
            Join EIG on Discord ↗
          </a>
        </div>
      </div>
    </section>
  );
}
