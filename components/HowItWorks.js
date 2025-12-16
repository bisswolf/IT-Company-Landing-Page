export default function HowItWorks() {
  const steps = [
    {
      title: "Share Requirements",
      desc: "Tell us your goals, scope, and timelines",
    },
    {
      title: "Team Setup",
      desc: "We assign vetted engineers within days",
    },
    {
      title: "Development",
      desc: "Agile execution with regular updates",
    },
    {
      title: "Delivery",
      desc: "On-time delivery with quality assurance",
    },
  ];

  return (
    <section className="section-soft how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Simple process</p>

        <div className="process-wrapper">
          <div className="process-line" />

          {steps.map((step, index) => (
            <div key={step.title} className="process-card">
              <div className="process-number">{index + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
