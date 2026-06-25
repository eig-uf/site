"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/members", label: "Members" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-border bg-background">
      <div className="flex h-20 w-full items-stretch justify-between">
        <div className="flex items-center px-4 lg:px-6">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/main_logo.svg"
              alt="Embodied Intelligence Group"
              width={80}
              height={80}
              className="h-20 w-20"
              priority
            />
          </Link>
        </div>

        <div className="hidden h-full items-stretch md:flex">
          <nav
            aria-label="Primary"
            className="main-nav flex items-stretch border-l border-border"
          >
            <ul className="flex h-full list-none items-stretch p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.href} className="flex h-full">
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link href="/#join" className="nav-cta border-l border-border">
            Join us
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle flex h-full items-center px-4 md:hidden lg:px-6"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-shell transition-transform ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-full bg-shell transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-full bg-shell transition-transform ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav aria-label="Mobile" className="px-4 py-2 lg:px-6">
            <ul className="divide-y divide-border">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link-mobile"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#join"
                  className="nav-link-mobile bg-surface-elevated text-shell"
                  onClick={() => setMobileOpen(false)}
                >
                  Join us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
