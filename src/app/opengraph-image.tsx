import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

export const alt = "EIG";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGeistMedium() {
  return fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@5.3.0/latin-500-normal.woff",
  ).then((response) => response.arrayBuffer());
}

export default async function Image() {
  const [logo, geistMedium] = await Promise.all([
    readFile(join(process.cwd(), "public/logo-white.png")),
    loadGeistMedium(),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          gap: 28,
        }}
      >
        {/* img required for next/og ImageResponse */}
        <img
          src={logoSrc}
          alt=""
          width={96}
          height={96}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Geist",
            fontSize: 72,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            color: "#ffffff",
          }}
        >
          EIG
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
