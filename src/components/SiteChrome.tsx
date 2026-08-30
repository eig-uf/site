"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { socialLinks } from "@/lib/site";

const navLinks = [
  { href: "/members", label: "Members" },
  { href: "/join", label: "Join" },
] as const;

const menuLinks = [{ href: "/", label: "Home" }, ...navLinks] as const;
const headerBarHeight = 72;

const shellSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
  mass: 0.9,
};

const menuLineTransition: Transition = {
  duration: 0.2,
  ease: [0.4, 0, 0.2, 1],
};

const menuLineVariants: Variants = {
  open: (line: "top" | "bottom") => ({
    y: "-50%",
    rotate: line === "top" ? 45 : -45,
  }),
  closed: (line: "top" | "bottom") => ({
    y: line === "top" ? "calc(-50% - 6px)" : "calc(-50% + 6px)",
    rotate: 0,
  }),
};

function MenuButton({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  const lineClassName =
    "absolute left-1/2 top-1/2 block h-[2px] w-6 rounded-full bg-nav-primary";

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="site-menu"
      className="group relative h-[72px] w-[72px] cursor-pointer p-5"
    >
      <div className="absolute inset-0 m-2.5 flex items-center justify-center !rounded-lg transition-colors duration-200 group-hover:bg-nav-button-hover" />
      <span className="pointer-events-none relative block h-6 w-6">
        <motion.span
          custom="top"
          variants={menuLineVariants}
          transition={menuLineTransition}
          style={{ x: "-50%", transformOrigin: "center center" }}
          className={lineClassName}
        />
        <motion.span
          custom="bottom"
          variants={menuLineVariants}
          transition={menuLineTransition}
          style={{ x: "-50%", transformOrigin: "center center" }}
          className={lineClassName}
        />
      </span>
    </motion.button>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setMenuOpen(false);
  const shellHeight = menuOpen ? headerBarHeight + contentHeight : headerBarHeight;

  useLayoutEffect(() => {
    if (!menuOpen || !menuContentRef.current) {
      return;
    }

    const node = menuContentRef.current;
    const measure = () => setContentHeight(node.scrollHeight);

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const shellTransition = prefersReducedMotion
    ? { duration: 0.01 }
    : shellSpring;

  return (
    <>
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      />

      <motion.header
        initial={false}
        className="pointer-events-none fixed top-0 right-0 left-0 z-50 mx-auto p-4 md:p-6"
      >
        <motion.div
          data-nav-open={menuOpen ? "" : undefined}
          className="pointer-events-auto relative mx-auto overflow-hidden !rounded-xl border border-nav-border bg-nav-bg text-nav-primary shadow-none backdrop-blur-2xl transition-colors duration-200 [--menu-width-closed:100%] [--menu-width-open:100%] sm:[--menu-width-closed:380px] sm:[--menu-width-open:min(50vw,38rem)]"
          initial={false}
          animate={{
            width: menuOpen
              ? "var(--menu-width-open)"
              : "var(--menu-width-closed)",
            height: shellHeight,
          }}
          transition={shellTransition}
        >
          <div className="flex h-[72px] w-full items-center justify-between">
            <Link
              href="/"
              aria-label="Embodied Intelligence Group home"
              onClick={closeMenu}
            >
              <div className="flex h-[72px] w-[72px] items-center justify-center">
                <Image
                  src="/logo-black.png"
                  alt=""
                  width={48}
                  height={48}
                  className="size-11"
                />
              </div>
            </Link>

            <Link
              href="/"
              aria-label="Embodied Intelligence Group home"
              onClick={closeMenu}
              className="flex h-[72px] items-center px-5"
            >
              <span className="text-4xl font-bold tracking-[0.1em]">
                EIG
              </span>
            </Link>

            <MenuButton
              isOpen={menuOpen}
              onToggle={() => setMenuOpen((open) => !open)}
            />
          </div>

          <motion.div
            ref={menuContentRef}
            id="site-menu"
            aria-hidden={!menuOpen}
            animate={{ opacity: menuOpen ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.2 }}
            className="flex w-full flex-col justify-between gap-8 p-6"
          >
            <nav className="flex flex-col items-start gap-2 pb-8 text-nav-primary lg:pb-0">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className="text-3xl font-semibold transition-colors duration-200 hover:text-nav-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="border-t border-nav-border pt-5">
              <p className="font-mono text-sm text-nav-secondary">
                University of Florida
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-media-breakout py-10">
        <div className="site-media-width flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-black.png"
              alt=""
              width={24}
              height={24}
              className="size-6"
            />
            <p className="text-xs leading-relaxed text-muted">
              Embodied Intelligence Group
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted">
            {[
              ["Discord", socialLinks.discord],
              ["Instagram", socialLinks.instagram],
              ["LinkedIn", socialLinks.linkedin],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
