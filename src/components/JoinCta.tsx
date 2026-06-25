import Link from "next/link";

export function JoinCta() {
  return (
    <section id="join" className="border-t border-border py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <div className="animate-fade-up animate-fade-up-delay-3 border border-border bg-surface-elevated px-5 py-10 sm:px-8 sm:py-16 md:px-16 md:py-24">
          <p className="section-label">Join us</p>
          <h2 className="mt-3 max-w-2xl text-2xl font-medium tracking-tight sm:mt-4 sm:text-3xl md:text-5xl">
            Interested in joining?
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted sm:mt-6 sm:text-base">
            EIG is open to all UF students regardless of major and experience
            level.
          </p>

          <div className="mt-8 sm:mt-10">
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
