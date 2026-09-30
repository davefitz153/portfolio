import React from "react";
import LeadScoringModel from '../components/LeadScoringModel'
import EarthquakeVisualization from "../components/EarthquakeVisualization";

export default function Portfolio() {

  return (
    <div style={{ padding: "2rem", color: "#fff", background: "#121212", minHeight: "100vh", maxWidth: "1200px", margin: "0 auto" }}>
      Below are a few projects I've built.
      <LeadScoringModel />
      <EarthquakeVisualization />
    </div>
  );
}
