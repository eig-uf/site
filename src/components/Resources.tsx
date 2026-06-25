import type { ReactNode } from "react";
import type { Resource } from "@/data/resources";
import { clubResources, externalResources } from "@/data/resources";

function ResourceList({ items }: { items: Resource[] }) {
  return (
    <ul className="divide-y divide-border border border-border">
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 px-4 py-5 transition-colors hover:bg-surface-elevated sm:gap-3 md:flex-row md:items-baseline md:gap-6 md:px-5 md:py-6"
          >
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-muted md:w-28">
              {item.category}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-medium tracking-tight transition-colors group-hover:text-shell md:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ResourceSection({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section>
      <p className="section-label">{label}</p>
      <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
        {description}
      </p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Resources() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-12 md:pb-32 md:pt-16 lg:px-6">
      <div className="space-y-16 md:space-y-24">
        <div className="animate-fade-up animate-fade-up-delay-3">
          <ResourceSection
            label="From the club"
            title="Workshops."
            description="Workshop materials from EIG, each linked to its GitHub repo."
          >
            <ResourceList items={clubResources} />
          </ResourceSection>
        </div>

        <div className="animate-fade-up animate-fade-up-delay-4">
          <ResourceSection
            label="Online"
            title="Resources we recommend."
            description="Papers, courses, and tools from around the web for learning embodied AI and robotics on your own."
          >
            <ResourceList items={externalResources} />
          </ResourceSection>
        </div>
      </div>
    </div>
  );
}
