"use client";

import SectionTitle from "./ui/SectionTitle";
import { Stagger, FadeItem } from "./ui/Motion";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web & Mobile Development",
    desc: "From MVP to enterprise-scale applications.",
    featured: true,
  },
  {
    title: "Dedicated Development Teams",
    desc: "Extend your team with vetted engineers.",
  },
  {
    title: "Cloud & DevOps Services",
    desc: "Secure, scalable cloud infrastructure.",
  },
  {
    title: "Data Analytics & AI",
    desc: "Turn data into actionable insights.",
  },
  {
    title: "QA & Testing",
    desc: "Enterprise-grade quality assurance.",
  },
  {
    title: "Cyber Security",
    desc: "Secure your enterprise with our solutions",
  },
];

export default function Services() {
  return (
    <section style={{ background: "aliceblue" }}>
      <div className="container">
        <SectionTitle
          title="Our IT Outsourcing Services"
          subtitle="Comprehensive technology solutions"
        />

        <Stagger>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {services.map((s) => (
              <FadeItem key={s.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    padding: 36,
                    borderRadius: 18,
                    background: "#fff",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    key={s.title}
                    className={`card service-card ${
                      s.featured ? "featured" : ""
                    }`}
                  >
                    {s.featured && <span className="badge">Most Popular</span>}
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
