import Link from "next/link";

const footerLinks = [
  { href: "/#initiatives", label: "Initiatives" },
  { href: "/resources", label: "Resources" },
  { href: "/members", label: "Members" },
  { href: "/#join", label: "Join" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between lg:px-6">
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

      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-4 pt-8 lg:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          © {new Date().getFullYear()} Embodied Intelligence Group
        </p>
      </div>
    </footer>
  );
}
