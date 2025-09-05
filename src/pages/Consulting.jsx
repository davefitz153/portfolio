import React from "react";

export default function Consulting() {
  const services = [
    {
      title: "Data Visualization",
      bullets: [
        "Design interactive dashboards in Power BI and other BI tools to make complex data clear and actionable.",
        "Highlight trends, KPIs, and patterns to support decision-making across teams and executives.",
        "Deliver visualizations that translate analytics into insights for both technical and business audiences."
      ],
    },
    {
      title: "Data Strategy",
      bullets: [
        "Develop modern, scalable analytics strategies that leverage cloud platforms like AWS and Azure.",
        "Align data initiatives with business priorities, balancing technical feasibility and operational impact.",
        "Provide guidance on data architecture, governance, and cloud adoption to maximize value and efficiency."
      ],
    },
    {
      title: "Data Solutions",
      bullets: [
        "Create custom, data-driven apps and proofs of concept that bring analytics to life and demonstrate value.",
        "Rapidly prototype solutions that illustrate insights, enable adoption, and accelerate decision-making.",
        "Bridge technical execution and business needs through interactive, hands-on data applications."
      ],
    },
  ];


  return (
    <div
      style={{
        padding: "2rem",
        color: "#fff",
        background: "#121212",
        minHeight: "100vh",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.25rem" }}>Consulting Services</h1>

      {services.map((service, idx) => (
        <div key={idx} style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{service.title}</h2>
          <ul style={{ paddingLeft: "1.25rem", color: "#bbb", margin: 0 }}>
            {service.bullets.map((bullet, bIdx) => (
              <li key={bIdx} style={{ marginBottom: 0 }}>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
