import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteName } from "@/lib/site";

export const dynamic = "force-static";

export const alt = siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGeistMedium() {
  return fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@5.3.0/latin-500-normal.woff",
  ).then((response) => response.arrayBuffer());
}

export default async function Image() {
  const [hero, logo, geistMedium] = await Promise.all([
    readFile(join(process.cwd(), "public/images/og-dither-robot.png")),
    readFile(join(process.cwd(), "public/logo-black.png")),
    loadGeistMedium(),
  ]);

  const heroSrc = `data:image/jpeg;base64,${hero.toString("base64")}`;
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* img required for next/og ImageResponse */}
        <img
          src={heroSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 72,
            left: 0,
            right: 0,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
          >
            <img
              src={logoSrc}
              alt=""
              width={88}
              height={88}
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                fontFamily: "Geist",
                fontSize: 64,
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: "-0.065em",
                color: "#050505",
              }}
            >
              {siteName}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistMedium,
          style: "normal",
          weight: 500,
        },
      ],
    },
  );
}
