import Link from "next/link";
import { socialLinks } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="relative bg-background">
      <div className="mx-auto flex max-w-7xl items-stretch border-x border-border">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 px-3 py-4 sm:px-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-white.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0"
          />
          <span className="font-brand text-[clamp(1.5rem,2.6vw,2.5rem)] leading-none tracking-tight text-foreground">
            EIG
          </span>
        </Link>

        <nav className="ml-auto flex min-w-0 items-stretch divide-x divide-border border-l border-border">
          <Link
            href="/projects"
            className="flex items-center px-2.5 font-mono text-xs font-semibold leading-none text-foreground transition-colors hover:bg-cream/10 sm:px-5 sm:text-sm"
          >
            Projects
          </Link>
          <Link
            href="/members"
            className="flex items-center px-2.5 font-mono text-xs font-semibold leading-none text-foreground transition-colors hover:bg-cream/10 sm:px-5 sm:text-sm"
          >
            Members
          </Link>
          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-cream px-2.5 font-mono text-xs font-semibold leading-none text-cream-fg transition-colors hover:bg-shell sm:px-5 sm:text-sm"
          >
            <span className="sm:hidden">Discord</span>
            <span className="hidden sm:inline">Join Discord</span>
          </a>
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden bg-border">
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="animate-sweep absolute top-0 h-full w-[200px] bg-gradient-to-r from-transparent via-cream/70 to-transparent" />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl border-x border-border px-4 py-8 sm:px-6">
        <p className="font-mono text-xs text-muted-fg sm:text-sm">
          EIG University of Florida
        </p>
      </div>
    </footer>
  );
}
