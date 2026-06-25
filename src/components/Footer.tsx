import Link from "next/link";

const footerLinks = [
  { href: "/#initiatives", label: "Initiatives" },
  { href: "/resources", label: "Resources" },
  { href: "/members", label: "Members" },
  { href: "/#join", label: "Join" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-3 sm:px-4 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-6">
        <p className="max-w-s text-sm text-muted">
          Embodied Intelligence Group at the University of Florida.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-muted">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.08em] transition-colors hover:text-shell"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl border-t border-border px-3 pt-6 sm:px-4 md:mt-8 md:pt-8 lg:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          © {new Date().getFullYear()} Embodied Intelligence Group
        </p>
      </div>
    </footer>
  );
}
