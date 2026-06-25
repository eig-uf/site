import { HeroSplit } from "./HeroSplit";

export function Hero() {
  return (
    <section className="relative pt-24 pb-8 md:pt-32 md:pb-0">
      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <p className="animate-fade-up section-label">
          University of Florida
        </p>

        <HeroSplit />
      </div>
    </section>
  );
}
