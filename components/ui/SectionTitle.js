"use client";

import { FadeUp } from "./Motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <FadeUp>
      <div
        style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 64px" }}
      >
        <h2 style={{ fontSize: 42 }}>{title}</h2>
        <p style={{ marginTop: 12, fontSize: 16 }}>{subtitle}</p>
      </div>
      <div
        style={{
          width: 60,
          height: 4,
          background: "var(--primary)",
          margin: "24px auto 0",
          borderRadius: 999,
        }}
      />
    </FadeUp>
  );
}
