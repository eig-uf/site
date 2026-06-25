import Link from "next/link";

export function JoinCta() {
  return (
    <section id="join" className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="animate-fade-up animate-fade-up-delay-3 border border-border bg-surface-elevated px-8 py-16 md:px-16 md:py-24">
          <p className="section-label">Join us</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-tight md:text-5xl">
            Interested in joining?
          </h2>
          <p className="mt-6 max-w-xl text-muted">
            EIG is open to all UF students regardless of major and experience
            level.
          </p>

          <div className="mt-10">
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
