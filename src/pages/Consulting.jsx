import React from "react";

export default function Consulting() {
  const services = [
    {
      title: "Cost Clarity",
      bullets: [
        "Build easy-to-read dashboards that show exactly where your cloud spend is going.",
        "Highlight trends, inefficiencies, and opportunities for savings.",
        "Provide insights that teams and executives can act on immediately."
      ],
    },
    {
      title: "Cost Optimization",
      bullets: [
        "Review your current cloud usage and spending to find areas of waste.",
        "Set up tagging, budgets, and guardrails to control costs as you scale.",
        "Deliver actionable recommendations, automation, and policies to help you save money and stay on budget."
      ],
    },
    {
      title: "Cloud Acceleration",
      bullets: [
        "Provide guidance on scalable, secure cloud architecture, operational standards, and efficient workflows.",
        "Hands-on setup of cloud infrastructure, CI/CD workflows, and automation tailored to the team’s needs.",
        "Develop serverless components on AWS, such as Lambda functions, APIs, and managed databases",
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
