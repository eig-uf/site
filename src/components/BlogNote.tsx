export function BlogNote({ text }: { text: string }) {
  return (
    <div className="clear-both mb-5 grid grid-cols-[1.25rem_minmax(0,1fr)] items-baseline gap-x-3 border border-border bg-surface px-4 py-3.5 sm:mb-6 sm:px-5">
      <span aria-hidden="true" className="size-1.5 justify-self-center bg-foreground" />
      <p className="text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
