import Image from "next/image";
import type { Member } from "@/data/members";

const linkClass =
  "text-muted transition-colors hover:text-shell focus-visible:text-shell focus-visible:outline-none";

export function MemberCard({
  member,
  compact = false,
}: {
  member: Member;
  compact?: boolean;
}) {
  return (
    <article
      className={`bg-background ${compact ? "border border-border" : ""}`}
    >
      <div className="relative aspect-[4/5] w-full border-b border-border bg-surface-elevated">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
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

      <div className={compact ? "p-4" : "p-6 md:p-8"}>
        <p
          className={`font-mono uppercase tracking-[0.14em] text-muted ${
            compact ? "text-[0.65rem] leading-tight" : "text-xs"
          }`}
        >
          {member.role}
        </p>
        <h2
          className={`font-medium tracking-tight ${
            compact ? "mt-1.5 text-sm" : "mt-1.5 text-xl"
          }`}
        >
          {member.name}
        </h2>
        <p
          className={`font-mono text-muted ${
            compact ? "mt-1 text-[0.65rem]" : "mt-1.5 text-xs"
          }`}
        >
          {member.year} · {member.major}
        </p>
        <p
          className={`leading-relaxed text-muted ${
            compact ? "mt-2 text-xs leading-snug" : "mt-3 text-sm"
          }`}
        >
          {member.bio}
        </p>

        <div
          className={`flex flex-wrap items-center gap-x-2 gap-y-1 font-mono uppercase tracking-[0.08em] ${
            compact ? "mt-3 text-[0.65rem]" : "mt-4 text-xs"
          }`}
        >
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          {member.website ? (
            <>
              <span className="text-border" aria-hidden>
                /
              </span>
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Website
              </a>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
