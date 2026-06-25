"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { membersAsciiArt } from "@/content/members-ascii-art";

const MEMBERS_ASCII_HEIGHT_SCALE = 1.4;
const MEMBERS_ASCII_WIDTH_OVERFLOW = 1.2;

function fitAsciiToWidth(pre: HTMLPreElement, maxWidth: number) {
  let fontSize = 8;

  pre.style.fontSize = `${fontSize}px`;
  pre.style.lineHeight = "1";

  const widthBudget = maxWidth * MEMBERS_ASCII_WIDTH_OVERFLOW;
  while (pre.scrollWidth > widthBudget && fontSize > 2) {
    fontSize -= 0.25;
    pre.style.fontSize = `${fontSize}px`;
  }

  fontSize *= MEMBERS_ASCII_HEIGHT_SCALE;
  pre.style.fontSize = `${fontSize}px`;

  if (pre.scrollWidth > widthBudget && widthBudget > 0) {
    fontSize *= widthBudget / pre.scrollWidth;
    pre.style.fontSize = `${fontSize}px`;
  }
}

export function MembersAsciiArt() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [ready, setReady] = useState(false);

  const updateSize = useCallback(() => {
    const wrapper = wrapperRef.current;
    const pre = preRef.current;
    if (!wrapper || !pre) return;

    const maxWidth = wrapper.clientWidth;
    if (maxWidth === 0) return;

    fitAsciiToWidth(pre, maxWidth);
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
      className={`ascii-art-wrapper ascii-art-wrapper--members${ready ? " is-ready" : ""}`}
    >
      <pre
        ref={preRef}
        className="ascii-art ascii-art--members"
        aria-hidden="true"
      >
        {membersAsciiArt}
      </pre>
    </div>
  );
}
