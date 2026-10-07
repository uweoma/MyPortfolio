import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0d12",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: prompt mark + availability */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "76px",
              height: "76px",
              borderRadius: "18px",
              border: "2px solid #232a39",
              color: "#34d399",
              fontSize: "44px",
              fontWeight: 700,
            }}
          >
            {">_"}
          </div>
          <div style={{ display: "flex", color: "#99a2b3", fontSize: "26px" }}>
            {siteConfig.location}
          </div>
        </div>

        {/* middle: name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", color: "#e7eaf0", fontSize: "82px", fontWeight: 700 }}>
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", color: "#34d399", fontSize: "48px", fontWeight: 600, marginTop: "12px" }}>
            {siteConfig.role}
          </div>
          <div
            style={{
              display: "flex",
              color: "#99a2b3",
              fontSize: "30px",
              marginTop: "24px",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Building secure, scalable APIs and database-driven applications with Node.js and modern
            backend technologies.
          </div>
        </div>

        {/* bottom: stack */}
        <div style={{ display: "flex", gap: "14px" }}>
          {["Node.js", "PostgreSQL", "MongoDB", "Docker", "REST APIs"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                border: "1px solid #232a39",
                backgroundColor: "#111520",
                color: "#99a2b3",
                borderRadius: "10px",
                padding: "10px 20px",
                fontSize: "26px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
