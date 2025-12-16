"use client";

import SectionTitle from "./ui/SectionTitle";
import { Stagger, FadeItem } from "./ui/Motion";

const benefits = [
  {
    title: "Cost Optimization",
    desc: "Reduce development costs without quality compromise.",
  },
  {
    title: "Senior Engineers",
    desc: "Access vetted, experienced software professionals.",
  },
  {
    title: "Fast Onboarding",
    desc: "Kick-start projects in days, not months.",
  },
  {
    title: "Scalable Teams",
    desc: "Scale up or down as business demands change.",
  },
  {
    title: "Security & Compliance",
    desc: "Enterprise-grade security practices.",
  },
  { title: "Global Delivery", desc: "Serving clients worldwide." },
];

export default function WhyChooseUs() {
  return (
    <section
      style={{
        background: "aliceblue",
        padding: 36,
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="container">
        <SectionTitle
          title="Why Leading Companies Choose Us"
          subtitle="A strategic technology partner focused on long-term value"
        />

        <Stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
            }}
          >
            {benefits.map((b) => (
              <FadeItem key={b.title}>
                <div
                  style={{
                    background: "#fff",
                    padding: 32,
                    borderRadius: 16,
                    border: "1px solid var(--border)",
                  }}
                >
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
