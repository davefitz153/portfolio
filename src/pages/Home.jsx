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
    justifyContent: "center",
    padding: "4rem 2rem",
    gap: "2rem",
    flexWrap: "wrap",
    background: "linear-gradient(135deg, #1e1e1e, #2c2c2c)",
    borderRadius: "16px",
    position: "relative",
    overflow: "hidden", // prevents decorative shapes from causing scroll
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
  <div style={{ flex: "0 0 auto", minWidth: "200px", zIndex: 1 }}>
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Hello. I’m Dave.</h1>
    <p style={{ fontSize: "1.25rem", color: "#bbb", maxWidth: "300px", marginBottom: "2rem" }}>
      I help businesses unlock the value of their data with modern analytics solutions.
    </p>
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <a href="/consulting" style={{ ...ctaButtonStyle, flex: "1 1 auto", textAlign: "center" }}>How I Can Help</a>
      <a href="/contact" style={{ ...ctaButtonStyle, flex: "1 1 auto", textAlign: "center" }}>Get in Touch</a>
    </div>
  </div>

  {/* Middle Column - Photo */}
<div
  style={{
    flex: "1 1 auto",          // allow column to grow/shrink
    display: "flex",
    justifyContent: "center",  // centers photo inside column
    alignItems: "center",      // vertically if needed
    zIndex: 1,
  }}
>
  <div
    style={{
      width: "220px",
      height: "220px",
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
      backgroundImage: "url('/photo.jpg')",
    }}
  />
</div>


  {/* Right Column - Badge */}
  <div
    style={{
      flex: "0 0 180px",
      minWidth: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
    }}
  >
    <div
      style={{
        width: "180px",
        height: "180px",
        background: "#333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
      }}
    >
      <img
        src="/aws-saa-badge.png"
        alt="AWS Certified Solutions Architect"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
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
    title: "Data Visualization",
    description: "Interactive Power BI dashboards that make your data clear and actionable.",
    color: "#FF9900", // AWS orange
  },
  {
    title: "Data Strategy",
    description: "Modern, scalable data strategies that leverage the cloud within your budget.",
    color: "#0070f3", // blue
  },
  {
    title: "Data Solutions",
    description: "Custom apps that transform your data and analytics into interactive products.",
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
