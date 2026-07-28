import type { Metadata } from "next";
import { socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects and experiments from the Embodied Intelligence Group at UF.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border">
        <div className="relative mx-auto max-w-7xl overflow-hidden border-x border-border px-4 py-10 dot-grid sm:py-20">
          <h1 className="max-w-3xl font-mono text-3xl text-foreground sm:text-5xl">
            Projects
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm text-muted-fg sm:mt-4 sm:text-lg">
            Coming soon.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-x border-border px-4 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-mono text-2xl text-foreground">
              Have an idea?
            </h2>
            <p className="mt-2 max-w-xl font-mono text-sm text-muted-fg">
              Suggest it in Discord.
            </p>
          </div>
          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center border border-border bg-cream px-4 font-mono text-sm font-semibold text-cream-fg transition-all hover:scale-105 hover:bg-shell"
          >
            Join Discord
          </a>
        </div>
      </section>
    </div>
  );
}
