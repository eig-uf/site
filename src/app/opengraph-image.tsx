import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteDescription, siteName } from "@/lib/site";

export const dynamic = "force-static";

export const alt = `${siteName} at the University of Florida`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo-full.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "#0b0b0b",
          padding: "56px 64px",
          border: "1px solid #262625",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* img required for next/og ImageResponse */}
          <img
            src={logoSrc}
            alt=""
            width={320}
            height={88}
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#95948c",
            }}
          >
            University of Florida
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#e7e6d9",
              maxWidth: 900,
            }}
          >
            {siteName}
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              color: "#95948c",
              maxWidth: 820,
            }}
          >
            {siteDescription}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #262625",
            paddingTop: 24,
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#5e5d58",
            }}
          >
            ufeig.com
          </div>
          <div
            style={{
              fontSize: 18,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#5e5d58",
            }}
          >
            Robotics · AI · UF
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
