import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Left side - Logo or Name */}
      <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        Dave Fitzpatrick - Cloud Solutions Consultant
      </div>

      {/* Right side - Nav links */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem", // spacing between links
        }}
      >
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/consulting" style={linkStyle}>Consulting</Link>        
        <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#aaa",      // muted gray
  fontSize: "1rem",
  fontWeight: "500",
};
