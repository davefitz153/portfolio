import React from "react";

export default function Portfolio() {
  const project = {
    title: "Earthquake Map App",
    tagline: "Visualizing real-time seismic activity with cost-efficient serverless architecture on AWS.",
    benefits: [
      "Serverless architecture reduces operational costs",
      "CI/CD automated with GitHub Actions for faster deployments",
      "IaC with Terraform ensures consistent, version-controlled deployments",
      "Tech: AWS Lambda, API Gateway, DynamoDB, S3, Terraform, SAM, React, MapLibre GL, GitHub Actions"
    ],
    liveLink: "http://mapapp-frontend.s3-website-us-east-1.amazonaws.com/",
    githubLink: "https://github.com/davefitz153/aws-map-tool",
    screenshot: "/earthquake-app.png",
  };

  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#121212", minHeight: "100vh", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Title & Tagline */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.25rem" }}>{project.title}</h1>
      <p style={{ color: "#bbb", marginBottom: "1.5rem", fontStyle: "italic" }}>{project.tagline}</p>

      {/* Key Benefits */}
      <ul style={{ paddingLeft: "1.25rem", color: "#bbb", marginBottom: "1.5rem", listStylePosition: "inside" }}>
        {project.benefits.map((benefit, idx) => (
          <li key={idx} style={{ marginBottom: 0 }}>{benefit}</li>
        ))}
      </ul>

      {/* Minimal Links */}
      <div style={{ marginBottom: "2rem", display: "flex", gap: "1rem" }}>
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0070f3", textDecoration: "underline", fontWeight: "500" }}
        >
          View Project
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0070f3", textDecoration: "underline", fontWeight: "500" }}
        >
          GitHub Repo
        </a>
      </div>

      {/* Screenshot */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={project.screenshot}
          alt={`${project.title} Screenshot`}
          style={{
            maxWidth: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
          }}
        />
      </div>
    </div>
  );
}
