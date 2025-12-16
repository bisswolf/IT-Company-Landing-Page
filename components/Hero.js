"use client";

import Button from "./ui/Button";
import { FadeUp } from "./ui/Motion";

export default function Hero() {
  return (
    <section
      className="section-accent hero"
      style={{
        background:
          "linear-gradient(180deg, #5aadfd 0%, rgb(179 255 216)  60%)",
      }}
    >
      <div className="container hero-grid">
        <div className="hero-content">
          <FadeUp>
            <h1>
              Build Scalable Software with <span>Trusted IT Teams</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="hero-sub">
              We help startups and enterprises accelerate development with
              vetted engineers, fast onboarding, and transparent delivery.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="hero-actions">
              <Button>Get a Free Consultation</Button>
              <Button variant="secondary">View Services</Button>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
