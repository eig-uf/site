import Image from "next/image";
import type { Robot } from "@/data/robots";

export function RobotCard({
  robot,
  compact = false,
}: {
  robot: Robot;
  compact?: boolean;
}) {
  return (
    <article
      className={`bg-background ${compact ? "border border-border" : ""}`}
    >
      <div className="relative aspect-[4/5] w-full border-b border-border bg-surface-elevated">
        {robot.image ? (
          <Image
            src={robot.image}
            alt={robot.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              Photo
            </span>
          </div>
        )}
      </div>

      <div className={compact ? "p-4" : "p-8 md:p-10"}>
        <p
          className={`font-mono uppercase tracking-[0.14em] text-muted ${
            compact ? "text-[0.65rem] leading-tight" : "text-xs"
          }`}
        >
          {robot.platform}
        </p>
        <h2
          className={`font-medium tracking-tight ${
            compact ? "mt-1.5 text-sm" : "mt-4 text-xl"
          }`}
        >
          {robot.name}
        </h2>
        <p
          className={`leading-relaxed text-muted ${
            compact ? "mt-2 text-xs leading-snug" : "mt-4 text-sm"
          }`}
        >
          {robot.bio}
        </p>
      </div>
    </article>
  );
}
