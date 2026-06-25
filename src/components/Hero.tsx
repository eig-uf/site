import { HeroSplit } from "./HeroSplit";

export function Hero() {
  return (
    <section className="relative pt-24 pb-0 md:pt-32">
      <div className="relative mx-auto max-w-7xl px-3 sm:px-4 lg:px-6">
        <p className="animate-fade-up section-label">
          University of Florida
        </p>

        <HeroSplit />
      </div>
    </section>
  );
}
