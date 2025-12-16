"use client";

import Button from "./ui/Button";
import { FadeUp } from "./ui/Motion";

export default function Hero() {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #5aadfd 0%, rgb(179 255 216)  60%)",
      }}
    >
      <div className="container">
        <FadeUp>
          <h1 style={{ fontSize: 56, lineHeight: 1.1 }}>
            Strategic IT Outsourcing & Software Consulting
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p style={{ marginTop: 40, fontSize: 14, color: "var(--muted)" }}>
            Trusted by startups, SMEs & enterprises worldwide
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div style={{ marginTop: 40, display: "flex", gap: 20 }}>
            <Button>Get a Free Consultation</Button>
            <Button variant="secondary">View Services</Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
