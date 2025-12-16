export default function Testimonials() {
  const testimonials = [
    {
      quote: "Great delivery and communication throughout the project.",
      name: "Amit Sharma",
      role: "CTO",
      company: "FinTech Startup",
    },
    {
      quote: "Highly skilled engineering team with strong ownership.",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "SaaS Company",
    },
  ];

  return (
    <section className="section-soft testimonials">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">Trusted by clients</p>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="testimonial-card">
              <div className="testimonial-quote">“</div>

              <p className="testimonial-text">{item.quote}</p>

              <div className="testimonial-author">
                <strong>{item.name}</strong>
                <span>
                  {item.role}, {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
