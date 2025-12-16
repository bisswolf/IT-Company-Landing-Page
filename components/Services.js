"use client";

import SectionTitle from "./ui/SectionTitle";
import { Stagger, FadeItem } from "./ui/Motion";
import { motion } from "framer-motion";

const services = [
  { title: "Web & Mobile Development", desc: "Modern scalable applications." },
  {
    title: "Dedicated Development Teams",
    desc: "Extend your team with experts.",
  },
  { title: "Cloud & DevOps Services", desc: "Secure cloud infrastructure." },
  { title: "Data Analytics & AI", desc: "Turn data into insights." },
  { title: "QA & Testing", desc: "Enterprise-grade quality assurance." },
  { title: "Cyber Security", desc: "Secure your systems." },
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
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </motion.div>
              </FadeItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
