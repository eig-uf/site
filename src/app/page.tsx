import Link from "next/link";
import type { ReactNode } from "react";
import { HeroAsciiArt } from "@/components/HeroAsciiArt";
import { OpenToAsciiBand } from "@/components/OpenToAsciiBand";
import ParticleImage from "@/components/ParticleImage";
import { socialLinks } from "@/lib/site";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.07.07 0 0 0-.079.035c-.211.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.08.08 0 0 0-.079-.035A19.7 19.7 0 0 0 3.677 4.37a.09.09 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.08.08 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.08.08 0 0 1-.008-.127c.126-.094.252-.192.372-.291a.08.08 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.08.08 0 0 1 .079.01c.12.099.246.198.373.292a.08.08 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.891.08.08 0 0 0-.041.107c.36.698.772 1.363 1.225 1.993a.08.08 0 0 0 .084.029 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1-.004-4.125 2.062 2.062 0 0 1 .004 4.125Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const involveLinks: {
  label: string;
  href: string;
  detail: string;
  icon: ReactNode;
}[] = [
  {
    label: "Discord",
    href: socialLinks.discord,
    detail: "Chat, meetings, and project channels",
    icon: <DiscordIcon className="size-5 text-foreground sm:size-7" />,
  },
  {
    label: "Instagram",
    href: socialLinks.instagram,
    detail: "Photos, demos, and event updates",
    icon: <InstagramIcon className="size-5 text-foreground sm:size-7" />,
  },
  {
    label: "LinkedIn",
    href: socialLinks.linkedin,
    detail: "News and opportunities from EIG",
    icon: <LinkedInIcon className="size-5 text-foreground sm:size-7" />,
  },
];

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <section className="min-h-[420px] border-b border-border bg-background sm:min-h-[520px] md:h-[600px] md:min-h-0">
        <div className="relative mx-auto flex h-full min-h-[420px] max-w-7xl items-center justify-between overflow-hidden border-x border-border px-4 py-8 sm:min-h-[520px] sm:py-10 md:min-h-0 md:py-4 dot-grid">
          <div className="relative z-10 flex w-full max-w-3xl flex-col gap-4 pr-2 sm:gap-5 md:w-auto">
            <h1 className="font-mono text-[clamp(2rem,7vw,3rem)] leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Embodied
              <br />
              Intelligence Group
            </h1>
            <p className="max-w-2xl font-mono text-base leading-relaxed text-muted-fg sm:text-xl">
              EIG is a student organization at the University of Florida focused
              on how robots perceive, reason, and behave in the physical world.
            </p>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden lg:block xl:w-[58%]">
            <HeroAsciiArt />
          </div>
        </div>
      </section>

      <OpenToAsciiBand />

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl border-x border-border">
          <div className="grid border-b border-border lg:grid-cols-2">
            <div className="relative flex items-center justify-center px-4 py-8 sm:py-10 lg:min-h-[294px] lg:py-0">
              <div className="relative mx-auto aspect-square w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px]">
                <ParticleImage
                  className="particle-logo-glow absolute inset-0 h-full w-full"
                  particleCount={50}
                  particleSize={3}
                  hoverEnabled={false}
                  particleColor="single"
                  singleColor="#ffffff"
                  imageConfig={{
                    image: "/main_logo.svg",
                    mode: "fit",
                    scale: 8.4,
                    sizeUnit: "%",
                    widthPct: 100,
                    heightPct: 100,
                    widthPx: 400,
                    heightPx: 400,
                  }}
                  repulsionConfig={{
                    repulsionMode: "random",
                    repulsionForce: 10,
                    repulsionRadius: 28,
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center border-t border-border px-4 py-8 sm:px-6 sm:py-10 lg:border-t-0 lg:border-l lg:py-12">
              <p className="font-mono text-sm uppercase tracking-wider text-muted-fg">
                Community
              </p>
              <h2 className="mt-3 font-mono text-2xl text-foreground sm:mt-4 sm:text-4xl">
                Get involved
              </h2>
              <p className="mt-3 max-w-2xl font-mono text-sm text-muted-fg sm:mt-4 sm:text-base">
                Follow along and join the club — open to all UF students.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {involveLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col gap-2 px-4 py-5 pr-12 sm:gap-3 sm:px-6 sm:py-6 sm:pr-14"
              >
                <span className="absolute top-5 right-4 sm:top-6 sm:right-6">
                  {link.icon}
                </span>
                <span className="font-mono text-base text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                  {link.label}{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <span className="font-mono text-xs text-muted-fg sm:text-sm">
                  {link.detail}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <Link
          href="/projects"
          className="group mx-auto flex max-w-7xl flex-col border-x border-border px-4 py-12 sm:py-20"
        >
          <h2 className="font-mono text-2xl text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
            See our projects{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </h2>
        </Link>
      </section>
    </div>
  );
}
