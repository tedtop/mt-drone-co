import { ImageResponse } from "next/og";
import { companyName } from "@/lib/siteConfig";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0a1826",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "6px",
            backgroundColor: "#d97706",
            marginBottom: "40px",
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          {companyName}
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 34,
            color: "#9fb3c8",
          }}
        >
          Montana Commercial Drone Services
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
