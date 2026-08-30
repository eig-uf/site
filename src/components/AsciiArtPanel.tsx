"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

type AsciiArtPanelProps = {
  art: string;
  heightScale?: number;
  widthOverflow?: number;
  className?: string;
};

function fitAsciiToWidth(
  pre: HTMLPreElement,
  maxWidth: number,
  heightScale: number,
  widthOverflow: number,
) {
  let fontSize = 8;

  pre.style.fontSize = `${fontSize}px`;
  pre.style.lineHeight = "1";

  const widthBudget = maxWidth * widthOverflow;
  while (pre.scrollWidth > widthBudget && fontSize > 2) {
    fontSize -= 0.25;
    pre.style.fontSize = `${fontSize}px`;
  }

  fontSize *= heightScale;
  pre.style.fontSize = `${fontSize}px`;

  if (pre.scrollWidth > widthBudget && widthBudget > 0) {
    fontSize *= widthBudget / pre.scrollWidth;
    pre.style.fontSize = `${fontSize}px`;
  }
}

export function AsciiArtPanel({
  art,
  heightScale = 1.3,
  widthOverflow = 1.12,
  className = "",
}: AsciiArtPanelProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [ready, setReady] = useState(false);

  const updateSize = useCallback(() => {
    const pre = preRef.current;
    const wrapper = wrapperRef.current;
    if (!pre || !wrapper) return;

    const maxWidth = wrapper.clientWidth;
    if (maxWidth === 0) return;

    fitAsciiToWidth(pre, maxWidth, heightScale, widthOverflow);
    setReady(true);
  }, [heightScale, widthOverflow]);

  useLayoutEffect(() => {
    updateSize();

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new ResizeObserver(updateSize);
    observer.observe(wrapper);
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, [updateSize]);

  return (
    <div className={`ascii-panel ${className}`.trim()} aria-hidden="true">
      <div
        ref={wrapperRef}
        className={`ascii-panel-canvas${ready ? " is-ready" : ""}`}
      >
        <pre ref={preRef} className="ascii-panel-art">
          {art}
        </pre>
      </div>
    </div>
  );
}
