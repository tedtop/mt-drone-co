import { ImageResponse } from "next/og";

// Apple touch icon — same generated brand mark as icon.tsx, larger canvas.
export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a1826",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 800, color: "#ffffff" }}>MT</div>
          <div
            style={{
              marginTop: 10,
              width: 60,
              height: 6,
              backgroundColor: "#d97706",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
