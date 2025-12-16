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

          <ul className="cta-points">
            <li>✔ Free consultation</li>
            <li>✔ No obligation</li>
            <li>✔ Response within 24 hours</li>
          </ul>

          <div style={{ marginTop: 32 }}>
            <Button>Schedule Free Consultation</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
