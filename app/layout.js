import "./globals.css";
import "./styles/theme.css";
import "./styles/sections.css";
import "./styles/cards.css";
import "./styles/process.css";
import "./styles/pills.css";
import "./styles/testimonials.css";
import "./styles/cta.css";

export const metadata = {
  title: "IT Outsourcing & Software Development Services",
  description:
    "Scalable IT outsourcing solutions for startups, SMEs, and enterprises. Web, mobile, cloud, AI, and dedicated teams.",
  keywords:
    "IT outsourcing, software development, dedicated developers, cloud services, AI solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
