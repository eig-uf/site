import Image from "next/image";
import type { Metadata } from "next";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the Embodied Intelligence Group e-board at the University of Florida.",
};

const showHeadshots = false;

export default function MembersPage() {
  return (
    <section>
      <div className="site-media-breakout py-12 sm:py-20">
        <div className="site-media-width">
          <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-medium tracking-[-0.065em] whitespace-nowrap">
            Meet the team
          </h1>

          <div className="mt-12 grid w-full grid-cols-2 gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
            {members.map((member) => (
              <article
                key={member.name}
                className="flex w-full flex-col overflow-hidden !rounded-xl p-4 sm:p-5"
              >
                {showHeadshots && member.image ? (
                  <div className="relative aspect-[4/5] overflow-hidden !rounded-lg bg-border">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div
                  className={`flex flex-1 flex-col gap-3 ${showHeadshots ? "mt-4 sm:mt-5" : ""}`}
                >
                  <div>
                    <h2 className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted sm:text-base">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-foreground sm:text-base">
                    {member.major}
                    <span className="text-muted"> · Class of {member.year}</span>
                  </p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm underline underline-offset-4 hover:text-muted sm:text-base"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
