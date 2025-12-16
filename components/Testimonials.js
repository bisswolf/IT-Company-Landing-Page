export default function Testimonials() {
  const testimonials = [
    {
      quote: "Great delivery and communication throughout the project.",
      name: "Amit Sharma",
      role: "CTO",
      company: "FinTech Startup (Series A)",
    },
    {
      quote: "Highly skilled engineering team with strong ownership.",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "B2B SaaS Company",
    },
  ];

  return (
    <section className="section-soft testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">Trusted by global clients</p>

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-quote">“</div>
              <p>{t.quote}</p>

              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
