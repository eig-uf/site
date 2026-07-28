import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteName } from "@/lib/site";

export const dynamic = "force-static";

export const alt = `UF | ${siteName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0b0b0b",
          gap: 40,
        }}
      >
        {/* img required for next/og ImageResponse */}
        <img
          src={logoSrc}
          alt=""
          width={180}
          height={180}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          UF | Embodied Intelligence Group
        </div>
      </div>
    ),
    { ...size },
  );
}
