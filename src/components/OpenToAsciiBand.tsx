function BandSegment() {
  return (
    <span className="inline-flex items-center gap-6 px-2">
      <span aria-hidden className="text-border">
        ═╪═
      </span>
      <span>COMING FALL 2026</span>
      <span aria-hidden className="text-border">
        ◆
      </span>
    </span>
  );
}

const DASHES = "─".repeat(240);

function AsciiRail({ end }: { end: "top" | "bottom" }) {
  const open = end === "top" ? "┌" : "└";
  const close = end === "top" ? "┐" : "┘";

  return (
    <div
      aria-hidden
      className={`flex w-full items-center font-mono text-[10px] leading-none tracking-widest text-muted-fg ${
        end === "top" ? "border-b border-border" : "border-t border-border"
      } px-1 py-1`}
    >
      <span className="shrink-0">{open}</span>
      <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap">
        {DASHES}
      </span>
      <span className="shrink-0">{close}</span>
    </div>
  );
}

/** Horizontal ASCII ticker band. */
export function OpenToAsciiBand() {
  return (
    <section
      className="border-b border-border bg-background"
      aria-label="Coming Fall 2026"
    >
      <div className="mx-auto max-w-7xl overflow-hidden border-x border-border">
        <AsciiRail end="top" />
        <div className="ascii-band relative py-5">
          <div className="ascii-band-track font-mono text-xs tracking-[0.2em] text-muted-fg sm:text-sm">
            <div className="ascii-band-group">
              <BandSegment />
              <BandSegment />
              <BandSegment />
              <BandSegment />
            </div>
            <div className="ascii-band-group" aria-hidden>
              <BandSegment />
              <BandSegment />
              <BandSegment />
              <BandSegment />
            </div>
          </div>
        </div>
        <AsciiRail end="bottom" />
      </div>
    </section>
  );
}
