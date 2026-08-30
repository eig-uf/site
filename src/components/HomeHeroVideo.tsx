export function HomeHeroVideo() {
  return (
    <div className="home-hero-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="home-hero-video-player"
        aria-hidden="true"
      >
        <source src="/videos/dithered-video.webm?v=2" type="video/webm" />
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
