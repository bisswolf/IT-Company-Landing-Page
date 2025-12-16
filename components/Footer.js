export default function Footer() {
  return (
    <footer
      style={{
        background: "#020617",
        color: "#94a3b8",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          height: 1,
          background: "#1e293b",
          marginBottom: 48,
        }}
      />
      <div className="container">
        <h4 style={{ color: "#e5e7eb" }}>IT Outsourcing Company</h4>
        <p style={{ marginTop: 12 }}>
          Strategic IT outsourcing & software services.
        </p>

        <p style={{ marginTop: 24 }}>📧 contact@company.com</p>
        <p>🌐 LinkedIn | Twitter | GitHub</p>
      </div>
    </footer>
  );
}
