import type { ReactNode } from "react";

type MemberGridSectionProps = {
  label?: string;
  title: string;
  description?: string;
  delayClass?: string;
  compact?: boolean;
  aside?: ReactNode;
  children: ReactNode;
};

const compactCardGrid =
  "grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6";

export function MemberGridSection({
  label,
  title,
  description,
  delayClass = "",
  compact = false,
  aside,
  children,
}: MemberGridSectionProps) {
  return (
    <section
      className={`${
        aside
          ? "pt-10 md:pt-12"
          : compact
            ? "py-10 md:py-12"
            : "py-16 md:py-20"
      } ${delayClass}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="max-w-2xl">
          {label ? <p className="section-label">{label}</p> : null}
          <h2
            className={`font-medium tracking-tight text-xl md:text-2xl ${
              label ? "mt-2" : ""
            }`}
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>

        {aside ? (
          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
            <div
              className={
                compact
                  ? "grid min-w-0 max-w-xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
                  : "grid min-w-0 flex-1 gap-px overflow-hidden border border-border bg-border md:grid-cols-2"
              }
            >
              {children}
            </div>
            <div className="hidden min-w-0 shrink-0 lg:block lg:w-[28rem] xl:w-[32rem]">
              {aside}
            </div>
          </div>
        ) : (
          <div
            className={`mt-8 ${
              compact
                ? compactCardGrid
                : "grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
