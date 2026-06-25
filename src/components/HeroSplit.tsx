"use client";

import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { heroAsciiArt } from "@/content/hero-ascii-art";

const ASCII_HEIGHT_SCALE = 1.4;
const ASCII_WIDTH_OVERFLOW = 1.25;

function fitAsciiToWidth(pre: HTMLPreElement, maxWidth: number) {
  let fontSize = 8;

  pre.style.fontSize = `${fontSize}px`;
  pre.style.lineHeight = "1";

  const widthBudget = maxWidth * ASCII_WIDTH_OVERFLOW;
  while (pre.scrollWidth > widthBudget && fontSize > 2) {
    fontSize -= 0.25;
    pre.style.fontSize = `${fontSize}px`;
  }

  fontSize *= ASCII_HEIGHT_SCALE;
  pre.style.fontSize = `${fontSize}px`;

  if (pre.scrollWidth > widthBudget && widthBudget > 0) {
    fontSize *= widthBudget / pre.scrollWidth;
    pre.style.fontSize = `${fontSize}px`;
  }
}

function HeroAsciiArt({
  onHeightChange,
}: {
  onHeightChange: (height: number | undefined) => void;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [ready, setReady] = useState(false);

  const updateSize = useCallback(() => {
    const pre = preRef.current;
    const wrapper = wrapperRef.current;
    if (!pre || !wrapper) return false;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const maxWidth = wrapper.clientWidth;

    if (!isDesktop || maxWidth === 0) {
      wrapper.style.paddingTop = "0";
      onHeightChange(undefined);
      setReady(true);
      return true;
    }

    fitAsciiToWidth(pre, maxWidth);
    const topOffset = 40;
    wrapper.style.paddingTop = `${topOffset}px`;
    onHeightChange(pre.offsetHeight + topOffset);
    setReady(true);
    return true;
  }, [onHeightChange]);

  useLayoutEffect(() => {
    updateSize();

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(() => {
      updateSize();
    });
    observer.observe(wrapper);
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, [updateSize]);

  return (
    <div
      ref={wrapperRef}
      className={`ascii-art-wrapper ascii-art-wrapper--aside${ready ? " is-ready" : ""}`}
    >
      <pre
        ref={preRef}
        className="ascii-art ascii-art--aside"
        aria-hidden="true"
      >
        {heroAsciiArt}
      </pre>
    </div>
  );
}

export function HeroSplit() {
  const [rowHeight, setRowHeight] = useState<number | undefined>();

  return (
    <div
      className="hero-split mt-4 grid min-h-0 items-start gap-6 sm:mt-6 lg:grid-cols-2 lg:gap-6"
      style={rowHeight ? { height: rowHeight } : undefined}
    >
      <div
        className="min-w-0"
        style={rowHeight ? { height: rowHeight } : undefined}
      >
        <h1 className="animate-fade-up animate-fade-up-delay-1 max-w-3xl text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
          Embodied <br />
          Intelligence Group
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 md:mt-8 md:text-xl">
          EIG is a student organization at the University of Florida focused on
          how robots perceive, reason, and behave in the
          physical world.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
          <Link href="#join" className="btn btn-primary">
            Join the club
          </Link>
          <Link href="#initiatives" className="btn btn-secondary">
            Learn more
          </Link>
        </div>
      </div>

      <HeroAsciiArt onHeightChange={setRowHeight} />
    </div>
  );
}
