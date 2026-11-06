"use client";

import { useEffect, useRef } from "react";

export function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = async () => {
      if (video.paused) {
        try {
          await video.play();
        } catch {
          // Autoplay may be blocked until the page receives a gesture.
        }
      }
    };

    const onReady = () => {
      void tryPlay();
    };

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        void tryPlay();
      }
    };

    video.addEventListener("loadedmetadata", onReady);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    window.addEventListener("pageshow", onPageShow);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void tryPlay();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(video);

    const onGesture = () => {
      void tryPlay();
    };

    document.addEventListener("touchstart", onGesture, {
      once: true,
      passive: true,
    });
    document.addEventListener("click", onGesture, { once: true });

    void tryPlay();

    return () => {
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      window.removeEventListener("pageshow", onPageShow);
      observer.disconnect();
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("click", onGesture);
    };
  }, []);

  return (
    <div className="home-hero-video">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="home-hero-video-player"
        aria-hidden="true"
      >
        <source src="/videos/dithered-video.webm?v=4" type="video/webm" />
        <source src="/videos/dithered-video.mp4?v=4" type="video/mp4" />
      </video>
      <p className="home-hero-video-credit">
        Source:{" "}
        <a
          href="https://global.agilex.ai/products/piper-x"
          target="_blank"
          rel="noopener noreferrer"
        >
          AgileX Piper-X
        </a>
      </p>
    </div>
  );
}
