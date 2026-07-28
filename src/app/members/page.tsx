import type { Metadata } from "next";
import { members } from "@/data/members";
import { socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the Embodied Intelligence Group e-board at the University of Florida.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function MembersPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="border-b border-border">
        <div className="relative mx-auto max-w-7xl overflow-hidden border-x border-border px-4 py-10 dot-grid sm:py-20">
          <h1 className="max-w-3xl font-mono text-3xl text-foreground sm:text-5xl">
            Members
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm text-muted-fg sm:mt-4 sm:text-lg">
            Meet the team.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border border-x border-border sm:grid-cols-3 lg:grid-cols-5">
          {members.map((member) => (
            <article
              key={member.name}
              className="flex flex-col transition-colors hover:bg-cream/[0.04]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-border bg-panel">
                {member.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-mono text-4xl text-muted-fg">
                    {initials(member.name)}
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 px-3 py-4">
                <div>
                  <h2 className="font-mono text-sm text-foreground sm:text-base">
                    {member.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-cream">
                    {member.role}
                  </p>
                </div>
                <p className="font-mono text-[11px] text-muted-fg">
                  {member.major} · {member.year}
                </p>
                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-muted-fg underline-offset-4 hover:text-cream hover:underline"
                  >
                    LinkedIn
                  </a>
                  {member.website ? (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-muted-fg underline-offset-4 hover:text-cream hover:underline"
                    >
                      Website
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 border-x border-border px-4 py-14 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-mono text-2xl text-foreground">
              Interested in getting involved?
            </h2>
            <p className="mt-2 max-w-xl font-mono text-sm text-muted-fg">
              Join our Discord.
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
