import { ImageResponse } from "next/og";

// Default image shown when a page without its own picture is shared on LinkedIn,
// X, Slack etc. Generated at build time and served at /og.png (1200×630).
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 100px",
          background: "#0a0a0a",
          backgroundImage: "radial-gradient(ellipse at 50% -20%, rgba(249, 115, 22, 0.18), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 104,
            color: "#fafafa",
            letterSpacing: -2,
            textShadow: "0 0 40px rgba(249, 115, 22, 0.55)",
          }}
        >
          Hannes Täyrönen
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 36, color: "#a3a3a3" }}>
          [builder]  [engineer]  [explorer]
        </div>
        <div style={{ display: "flex", marginTop: 72, width: 80, height: 4, background: "#f97316" }} />
        <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#737373" }}>
          hannestayronen.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
