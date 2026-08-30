import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteName } from "@/lib/site";

export const dynamic = "force-static";

export const alt = `UF | ${siteName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo-black.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          color: "#050505",
          padding: 52,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "68%",
            paddingRight: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 20,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            UF.01 / Physical AI collective
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 86,
              fontWeight: 600,
              lineHeight: 0.9,
              letterSpacing: "-0.06em",
            }}
          >
            <span>Embodied</span>
            <span>Intelligence</span>
            <span>Group</span>
          </div>
          <div style={{ display: "flex", fontSize: 22 }}>
            Embodied Intelligence Group · University of Florida
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "32%",
            border: "1px solid #e6e6e6",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* img required for next/og ImageResponse */}
          <img
            src={logoSrc}
            alt=""
            width={210}
            height={210}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
