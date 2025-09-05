import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 1rem", // reduced side padding
          borderBottom: "1px solid #ddd",
          flexWrap: "wrap", // allows wrapping on small screens
          overflowX: "hidden", // prevents horizontal scroll
        }}
      >
      {/* Left side - Logo or Name */}
      <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
        Data Solutions Architect
      </div>

      {/* Right side - Nav links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem", // spacing between links
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
