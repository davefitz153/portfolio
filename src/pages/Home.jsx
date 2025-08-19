import React from "react";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem", padding: "0.75rem", background: "#121212", color: "#fff" }}>
      
      {/* Hero Section */}
        <section
          className="hero"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "4rem 2rem",
            gap: "2rem",
            flexWrap: "wrap",
            background: "linear-gradient(135deg, #1e1e1e, #2c2c2c)",
            borderRadius: "16px",
            position: "relative",
          }}
        >
        {/* Decorative shapes */}
        <div style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          width: "100px",
          height: "100px",
          background: "rgba(0, 128, 255, 0.2)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-30px",
          right: "-30px",
          width: "150px",
          height: "150px",
          background: "rgba(255, 153, 0, 0.15)",
          borderRadius: "50%",
        }} />

        {/* Left Column - Intro + CTA */}
        <div style={{ flex: 1, minWidth: "250px", zIndex: 1 }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Hello. I’m Dave.</h1>
          <p style={{ fontSize: "1.25rem", color: "#bbb", maxWidth: "500px", marginBottom: "2rem" }}>
            I help businesses maximize the value of their cloud investments by optimizing costs, 
            reducing overruns, and automating workflows.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="/portfolio" style={ctaButtonStyle}>View My Work</a>
            <a href="/contact" style={ctaButtonStyle}>Get in Touch</a>
          </div>
        </div>

        {/* Middle Column - AWS Badge */}
        <div
          style={{
            flex: "0 0 150px",
            minWidth: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "150px",
              height: "50px",
              background: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              color: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            }}
          >
            <img src="/aws-saa-badge.png" />
          </div>
        </div>

        {/* Right Column - Photo */}
        <div
          style={{
            flex: 1,
            minWidth: "200px",
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "#333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
              color: "#bbb",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url('/photo.jpg')"
            }}
          >

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>My Services</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {services.map((service, idx) => (
            <div
              key={idx}
              style={{
                background: "#1e1e1e",
                borderRadius: "12px",
                padding: "1.5rem",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#bbb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              }}
            >
              {/* Placeholder icon */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: service.color,
                  marginBottom: "1rem",
                }}
              ></div>

              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "#fff" }}>
                {service.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "#bbb" }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Cloud Cost Optimization",
    description: "Cloud strategies to help enterprises optimize spend and maximize ROI.",
    color: "#FF9900", // AWS orange
  },
  {
    title: "Automation & DevOps",
    description: "Workflow automation and CI/CD pipelines to improve efficiency and reliability.",
    color: "#0070f3", // blue
  },
  {
    title: "Cloud Acceleration",
    description: "Hands-on embedded AWS expertise to help startups and innovators GTM faster.",
    color: "#f0a500",
  }
];

const ctaButtonStyle = {
  padding: "0.75rem 1.5rem",
  background: "#0070f3",
  color: "#fff",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "500",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
};
