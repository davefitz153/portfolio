import React from "react";
import { Link } from "react-router-dom";

export default function Consulting() {
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

  <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#bbb" }}>
    If you are interested in working together, read below for a general idea of how that might look, and <Link to="/contact" style={linkStyle}>contact me</Link> if you'd like to discuss.
  </p>
  
    {/* Project Management Section */}
  <div className="data-solutions">
    <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
      Agile Project Management
    </h2>
<p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#bbb" }}>
  I manage small to mid-sized projects with an agile approach, keeping teams
  aligned, priorities clear, and work moving forward through collaboration,
  regular feedback, and incremental delivery.
</p>

  </div>
  

  {/* Fractional Help Section */}
  <div className="fractional-help">
    <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
      BI & Analytics
    </h2>
    <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#bbb" }}>
I'm open to full-time, part-time, and contract opportunities across analytics, business intelligence, project management, and data initiatives. I'm comfortable working at both the strategic and hands-on levels, depending on what the team and project require.

    </p>
  </div>    
  
  {/* Power BI */}
  <div className="power-bi">
    <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
      Power BI
    </h2>
    <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#bbb" }}>
      I help you maximize the value of your Power BI investment by identifying opportunities to improve reporting, 
      data models, workflows, governance, and the overall user experience.
    </p>
  </div>  

  {/* Data Solutions Section */}
  <div className="data-solutions">
    <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
      Data/Technical Projects
    </h2>
    <p style={{ fontSize: "1rem", lineHeight: 1.6, color: "#bbb" }}>
I build focused projects and proofs of concept that help teams explore new ideas, automate processes, and see what's possible without committing to a large engagement. These can range from data and reporting solutions to APIs, automation, and other technical initiatives.
    </p>
  </div>
  
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",    
  fontSize: "1rem",
  fontWeight: "500",
};
