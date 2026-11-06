import Image from "next/image";
import { memberSections, type Member, type MemberSection } from "@/data/members";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Team",
  description:
    "Meet the Embodied Intelligence Group e-board, team leads, and members at the University of Florida.",
  path: "/members",
});

function showsRole(section: MemberSection, member: Member) {
  return member.role.trim().toLowerCase() !== section.title.trim().toLowerCase();
}

function MemberCard({ member, role }: { member: Member; role?: string }) {
  const detail = [member.major, member.year].filter(Boolean).join(" · ");

  return (
    <article className="flex w-full min-w-0 flex-col">
      {member.image ? (
        <div className="relative mb-3 aspect-[4/5] w-[calc(100%-1.25rem)] overflow-hidden !rounded-lg sm:w-[calc(100%-1.75rem)]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 16vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <h3 className="wrap-anywhere text-[15px] font-medium tracking-[-0.02em] sm:text-base">
        {member.name}
      </h3>
      {role ? (
        <p className="mt-0.5 wrap-anywhere text-sm text-muted">{role}</p>
      ) : null}
      {detail ? <p className="mt-0.5 text-sm text-muted">{detail}</p> : null}
      {(member.email || member.linkedin) && (
        <div className="mt-2 flex flex-col gap-1">
          {member.email ? (
            <a
              href={`mailto:${member.email}`}
              className="wrap-anywhere text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {member.email}
            </a>
          ) : null}
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}

export default function MembersPage() {
  return (
    <section>
      <div className="page-shell py-12 sm:py-20">
        <h1 className="max-w-4xl text-[clamp(2.25rem,8vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.06em]">
          Meet the team
        </h1>

        <div className="mt-14 flex flex-col gap-16 sm:mt-20 sm:gap-24">
          {memberSections.map((section) =>
            section.members.length === 0 ? null : (
              <div key={section.id}>
                <h2 className="text-sm font-medium tracking-[-0.01em] text-muted sm:text-base">
                  {section.title}
                </h2>

                {section.members.some(
                  (member) => member.image || showsRole(section, member),
                ) ? (
                  <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-8 sm:grid-cols-6 sm:gap-x-4 sm:gap-y-10">
                    {section.members.map((member) => (
                      <MemberCard
                        key={member.name}
                        member={member}
                        role={
                          showsRole(section, member) ? member.role : undefined
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:mt-5 sm:grid-cols-3 lg:grid-cols-4">
                    {section.members.map((member) => (
                      <li
                        key={member.name}
                        className="wrap-anywhere text-[15px] tracking-[-0.02em] sm:text-base"
                      >
                        {member.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
