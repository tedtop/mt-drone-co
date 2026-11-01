import { ImageResponse } from "next/og";

// Simple generated brand mark (navy square, amber accent bar, "MT" monogram)
// — matches the header logo mark, no stock imagery. Replace with a real
// designed favicon once brand assets exist (see README "Placeholders").
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            fontFamily: "sans-serif",
            fontSize: 14,
            fontWeight: 800,
            color: "#d97706",
          }}
        >
          MT
        </div>
      </div>
    ),
    { ...size }
  );
}
