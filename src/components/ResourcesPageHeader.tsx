import { ResourcesAsciiArt } from "@/components/ResourcesAsciiArt";

export function ResourcesPageHeader() {
  return (
    <section className="border-b border-border pt-28 pb-12 md:pt-32 md:pb-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-6">
          <div className="min-w-0">
            <p className="section-label animate-fade-up">Resources</p>
            <h1 className="animate-fade-up animate-fade-up-delay-1 mt-4 max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
              Where to start learning.
            </h1>
            <p className="animate-fade-up animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              EIG workshops on GitHub, plus papers, courses, and tools we
              recommend for learning embodied AI and robotics.
            </p>
          </div>

          <div className="hidden min-w-0 lg:block">
            <ResourcesAsciiArt />
          </div>
        </div>
      </div>
    </section>
  );
}
