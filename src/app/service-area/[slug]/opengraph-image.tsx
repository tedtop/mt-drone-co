import { ImageResponse } from "next/og";
import { cities, getCityBySlug } from "@/lib/cities-data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  const headline = city ? `Drone Services in ${city.name}, Montana` : "Montana Commercial Drone Services";

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
        {city ? (
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#d97706",
              marginBottom: "16px",
            }}
          >
            {city.region}
          </div>
        ) : null}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          {headline}
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
