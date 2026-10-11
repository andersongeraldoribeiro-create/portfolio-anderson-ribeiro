import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Anderson Ribeiro — Redes, Infraestrutura & Desenvolvimento";
export const size = { width: 1200, height: 630 };
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
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "#f4f8fb",
          background: "linear-gradient(135deg, #06101b 0%, #0a1c30 58%, #10273a 100%)",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", width: 540, height: 540, borderRadius: 999, border: "1px solid #2fe4c2", opacity: 0.2, right: -90, top: -160 }} />
        <div style={{ position: "absolute", width: 360, height: 360, borderRadius: 999, border: "1px solid #5e8cff", opacity: 0.24, right: 0, top: -60 }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 52, height: 3, background: "#34e5c3" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 700 }}>Anderson Ribeiro</span>
            <span style={{ fontSize: 18, color: "#92a6b8", marginTop: 5 }}>Disponível para trabalho remoto / home office</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>Infraestrutura que conecta.</div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3, color: "#34e5c3" }}>Software que resolve.</div>
          <div style={{ marginTop: 28, fontSize: 22, color: "#a7b6c3" }}>Redes • FTTH • MikroTik • Web • Android • Diagnóstico</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "#738899" }}>
          <span>12+ anos de experiência</span>
          <span>RotaObra / NetVision PRO</span>
        </div>
      </div>
    ),
    size,
  );
}

