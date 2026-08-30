import { AsciiArtPanel } from "@/components/AsciiArtPanel";
import { homeAsciiGallery } from "@/content/home-ascii-gallery";

export function HomeAsciiScene() {
  return (
    <div className="home-ascii-scene" aria-hidden="true">
      {homeAsciiGallery.map((piece) => (
        <AsciiArtPanel
          key={piece.id}
          art={piece.art}
          heightScale={piece.heightScale}
          widthOverflow={piece.widthOverflow}
          className={piece.placement}
        />
      ))}
    </div>
  );
}
