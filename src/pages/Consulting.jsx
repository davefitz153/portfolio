import React from "react";

export default function Consulting() {
  const services = [
    {
      title: "Cost Optimization",
      bullets: [
        "Review current cloud usage, spending patterns, and infrastructure to identify inefficiencies.",
        "Implement tagging strategies, resource organization, and cost governance aligned with AWS and FinOps standards.",
        "Provide actionable outputs such as dashboards, automation scripts, and cost policies to enable ongoing monitoring and savings.",
      ],
    },
    {
      title: "Automation & DevOps",
      bullets: [
        "Review current development and deployment workflows to identify bottlenecks, manual processes, and risks.",
        "Implement CI/CD pipelines, version-controlled infrastructure, and automated testing following DevOps and AWS best practices.",
        "Deliver fully automated workflows, scripts, deployment pipelines, and documentation to ensure reliable, repeatable, and efficient operations",
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
      <p style={{ color: "#bbb", marginBottom: "2rem", fontSize: "1.1rem" }}>
        I help businesses maximize the value of their cloud investments by optimizing costs, 
            reducing overruns, and automating workflows.
      </p>

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
