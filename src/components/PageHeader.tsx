type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  compact?: boolean;
};

export function PageHeader({
  label,
  title,
  description,
  compact = false,
}: PageHeaderProps) {
  return (
    <section
      className={
        compact
          ? "border-b border-border pt-24 pb-8 md:pt-28 md:pb-10"
          : "border-b border-border pt-28 pb-12 md:pt-32 md:pb-14"
      }
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <p className="section-label animate-fade-up">{label}</p>
        <h1
          className={`animate-fade-up animate-fade-up-delay-1 max-w-4xl font-medium leading-[1.1] tracking-tight ${
            compact ? "mt-3 text-3xl md:text-4xl" : "mt-4 text-4xl md:text-6xl"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`animate-fade-up animate-fade-up-delay-2 max-w-2xl leading-relaxed text-muted ${
              compact ? "mt-4 text-sm md:text-base" : "mt-6 text-lg"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
