import Image from "next/image";
import type { Initiative } from "@/data/initiatives";
import { initiatives } from "@/data/initiatives";

const delayClasses = [
  "animate-fade-up-delay-1",
  "animate-fade-up-delay-2",
  "animate-fade-up-delay-3",
  "animate-fade-up-delay-4",
] as const;

function InitiativeImage({ item }: { item: Initiative }) {
  return (
    <figure className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-surface-elevated md:aspect-[3/2] md:min-h-[18rem] lg:min-h-[20rem]">
      {item.image ? (
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <figcaption className="flex h-full items-center justify-center px-6 text-center font-mono text-xs uppercase tracking-[0.12em] text-muted md:text-sm">
          {item.imageAlt}
        </figcaption>
      )}
    </figure>
  );
}

function InitiativeBlock({
  item,
  index,
}: {
  item: Initiative;
  index: number;
}) {
  const reversed = index % 2 === 1;
  const delayClass = delayClasses[index] ?? delayClasses[3];

  return (
    <section
      className={`pb-12 md:pb-16${index === 0 ? " pt-6 md:pt-8" : " border-t border-border py-12 md:py-16"}`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 lg:px-6 ${delayClass} animate-fade-up`}
      >
        <div className="grid gap-y-8 md:min-h-[24rem] md:grid-cols-2 md:items-center md:gap-x-4 lg:gap-x-6">
          {reversed ? (
            <>
              <div className="md:-translate-y-6 lg:-translate-y-8">
                <time className="font-mono text-sm text-muted">{item.date}</time>
                <h3 className="mt-3 text-2xl font-medium tracking-tight md:mt-4 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:mt-4 md:text-base">
                  {item.description}
                </p>
              </div>
              <div className="md:translate-y-8 lg:translate-y-10">
                <InitiativeImage item={item} />
              </div>
            </>
          ) : (
            <>
              <div className="md:translate-y-6 lg:translate-y-8">
                <InitiativeImage item={item} />
              </div>
              <div className="md:-translate-y-4 lg:-translate-y-6">
                <time className="font-mono text-sm text-muted">{item.date}</time>
                <h3 className="mt-3 text-2xl font-medium tracking-tight md:mt-4 md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:mt-4 md:text-base">
                  {item.description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function Initiatives() {
  return (
    <div id="initiatives">
      <section className="border-t border-border pt-12 md:pt-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <p className="section-label animate-fade-up">Initiatives</p>
          <h2 className="animate-fade-up animate-fade-up-delay-1 mt-4 max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
            What we do as a club.
          </h2>
        </div>
      </section>

      {initiatives.map((item, index) => (
        <InitiativeBlock key={index} item={item} index={index} />
      ))}
    </div>
  );
}
