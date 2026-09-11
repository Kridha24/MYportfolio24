import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/links";

export const runtime = "nodejs";
export const alt = "Mihir Shekhar Gupta — AI & Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0f19",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(59, 130, 246, 0.15) 5%, transparent 0%)",
          backgroundSize: "50px 50px",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#f8fafc",
          border: "2px solid #1e293b",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {SITE_CONFIG.monogram}
            </div>
            <span style={{ fontSize: "24px", fontWeight: "bold", letterSpacing: "-0.5px" }}>
              {SITE_CONFIG.name}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: "#34d399",
              }}
            />
            <span>Available for Internships</span>
          </div>
        </div>

        {/* Center Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              color: "#3b82f6",
              fontSize: "20px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontWeight: 700,
            }}
          >
            AI & Full-Stack Developer
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 900,
              lineHeight: "1.2",
              letterSpacing: "-1.5px",
              color: "#ffffff",
              maxWidth: "950px",
            }}
          >
            Building intelligent computer vision pipelines & production full-stack systems.
          </div>
        </div>

        {/* Bottom Specs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#94a3b8",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Python & FastAPI</span>
            <span style={{ color: "#475569" }}>/</span>
            <span>OpenCV & YOLOv8</span>
            <span style={{ color: "#475569" }}>/</span>
            <span>React & TypeScript</span>
            <span style={{ color: "#475569" }}>/</span>
            <span>PostgreSQL</span>
          </div>

          <div style={{ color: "#38bdf8", fontWeight: 600 }}>
            {SITE_CONFIG.siteUrl.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
