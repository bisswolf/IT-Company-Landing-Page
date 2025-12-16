"use client";

import Button from "./ui/Button";
import { FadeUp } from "./ui/Motion";

export default function CTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
        color: "#ffffff",
      }}
    >
      <div className="container">
        <FadeUp>
          <h2 style={{ fontSize: 42 }}>
            Let’s Build Your Next Digital Product
          </h2>
          <p style={{ marginTop: 12, color: "#dbeafe", fontSize: 14 }}>
            No obligation • 100% confidential • Free consultation
          </p>

          <div style={{ marginTop: 32 }}>
            <Button>Schedule Free Consultation</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
