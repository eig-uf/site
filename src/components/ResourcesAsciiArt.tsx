"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { resourcesAsciiArt } from "@/content/resources-ascii-art";

const RESOURCES_ASCII_SCALE = 0.85;

export function ResourcesAsciiArt() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [ready, setReady] = useState(false);

  const updateSize = useCallback(() => {
    const wrapper = wrapperRef.current;
    const pre = preRef.current;
    if (!wrapper || !pre) return;

    const maxWidth = wrapper.clientWidth;
    if (maxWidth === 0) return;

    let fontSize = 7;
    pre.style.fontSize = `${fontSize}px`;
    pre.style.lineHeight = "1";

    while (pre.scrollWidth > maxWidth && fontSize > 2) {
      fontSize -= 0.25;
      pre.style.fontSize = `${fontSize}px`;
    }

    fontSize *= RESOURCES_ASCII_SCALE;
    pre.style.fontSize = `${fontSize}px`;

    setReady(true);
  }, []);

  useLayoutEffect(() => {
    updateSize();

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(updateSize);
    observer.observe(wrapper);

    return () => observer.disconnect();
  }, [updateSize]);

  return (
    <div
      ref={wrapperRef}
      className={`ascii-art-wrapper ascii-art-wrapper--resources${ready ? " is-ready" : ""}`}
    >
      <pre
        ref={preRef}
        className="ascii-art ascii-art--resources"
        aria-hidden="true"
      >
        {resourcesAsciiArt}
      </pre>
    </div>
  );
}
