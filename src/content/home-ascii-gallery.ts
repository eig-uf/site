import { heroAsciiArt } from "@/content/hero-ascii-art";

export type HomeAsciiPiece = {
  id: string;
  art: string;
  heightScale?: number;
  widthOverflow?: number;
  placement: string;
};

export const homeAsciiGallery: HomeAsciiPiece[] = [
  {
    id: "humanoid",
    art: heroAsciiArt,
    heightScale: 1.5,
    widthOverflow: 1.05,
    placement: "home-ascii-piece home-ascii-piece--center",
  },
];
