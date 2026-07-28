"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { heroAsciiArt } from "@/content/hero-ascii-art";

const ASCII_HEIGHT_SCALE = 1.35;
const ASCII_WIDTH_OVERFLOW = 1.2;

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

/** Live-site robot ASCII from main, fitted into the Invo hero. */
export function HeroAsciiArt() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [ready, setReady] = useState(false);

  const updateSize = useCallback(() => {
    const pre = preRef.current;
    const wrapper = wrapperRef.current;
    if (!pre || !wrapper) return;

    const maxWidth = wrapper.clientWidth;
    if (maxWidth === 0) return;

    fitAsciiToWidth(pre, maxWidth);
    setReady(true);
  }, []);

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
      className={`hero-ascii-wrap${ready ? " is-ready" : ""}`}
      aria-hidden="true"
    >
      <pre ref={preRef} className="hero-ascii">
        {heroAsciiArt}
      </pre>
    </div>
  );
}
