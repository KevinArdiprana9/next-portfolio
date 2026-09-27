import { ImageResponse } from "next/og";

export const alt = "Kevin Ardiprana - Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#FAFAF8",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#2F6B57",
          }}
        />
        <span style={{ fontSize: 24, color: "#6B6F76" }}>
          Fresh graduate · Open to entry-level roles
        </span>
      </div>
      <div
        style={{
          fontSize: 72,
          fontStyle: "italic",
          color: "#18181B",
          lineHeight: 1.1,
        }}
      >
        Kevin Ardiprana
      </div>
      <div style={{ fontSize: 34, color: "#3f3f46", marginTop: 16 }}>
        Fullstack Developer
      </div>
    </div>,
    { ...size },
  );
}
