import React from "react";

export default function Contact() {
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
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.25rem" }}>Contact</h1>
      <p style={{ color: "#bbb", marginBottom: "1.5rem", fontSize: "1.1rem" }}>
        The easiest way to reach me is via LinkedIn.  
        Let’s discuss cloud solutions, cost optimization, or DevOps automation.
      </p>
      <a
        href="https://www.linkedin.com/in/davefitzp/" 
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0070f3",
          textDecoration: "underline",
          fontWeight: "500",
          fontSize: "1.2rem",
        }}
      >
        Connect with me on LinkedIn
      </a>
    </div>
  );
}
