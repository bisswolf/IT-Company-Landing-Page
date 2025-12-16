import SectionTitle from "./ui/SectionTitle";

const industries = [
  "Startups",
  "FinTech",
  "HealthTech",
  "E-commerce",
  "SaaS",
  "Enterprises",
];

export default function Industries() {
  return (
    <section style={{ background: "aliceblue" }}>
      <div className="container">
        <SectionTitle
          title="Industries We Serve"
          subtitle="Domains we work with"
        />
        <div
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {industries.map((i) => (
            <span
              key={i}
              style={{
                padding: "12px 20px",
                background: "white",
                borderRadius: 999,
              }}
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
