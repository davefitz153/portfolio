import { useState } from "react";

export default function LeadScoringModel() {

  const project = {
    title: "Lead Scoring API",
    tagline: "Transforms business data (e.g. Salesforce) into actionable insights with a cloud-deployed machine learning API.",
    benefits: [
      "Leverages familiar Python and scikit-learn workflows to deploy models quickly and easily",
      "Serverless container deployment reduces operational overhead and scales automatically on AWS",
      "Supports rapid testing and iteration with local API testing and browser-based JSON interface",
      "Tech: AWS Lambda (container), API Gateway, ECR, scikit-learn, Python, React for interactive testing"
    ],
    liveLink: "http://mapapp-frontend.s3-website-us-east-1.amazonaws.com/",
    githubLink: "https://github.com/davefitz153/aws-map-tool",
    screenshot: "/lead-scoring.png",
  };

  const [requestBody, setRequestBody] = useState(`{
  "Title": "Manager",
  "Industry": "Software",
  "LeadSource": "Web",
  "AnnualRevenue": 1200000,
  "NumberOfEmployees": 50,
  "EmailsOpened": 7,
  "WebVisits": 15,
  "DemoRequested": 1
}`);
  const [responseBody, setResponseBody] = useState("");

  const handleTestApi = async () => {
    try {
      const res = await fetch("https://jjp2gx5h93.execute-api.us-east-1.amazonaws.com/Prod/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody,
      });
      const data = await res.json();
      setResponseBody(JSON.stringify(data, null, 2));
    } catch (err) {
      setResponseBody("Error: " + err.message);
    }
  };

  return (
    <div>
      {/* Title & Tagline */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "0.25rem" }}>{project.title}</h1>
      <p style={{ color: "#bbb", marginBottom: "1.5rem", fontStyle: "italic" }}>{project.tagline}</p>

      {/* Key Benefits */}
      <ul style={{ paddingLeft: "1.25rem", color: "#bbb", marginBottom: "1.5rem", listStylePosition: "inside" }}>
        {project.benefits.map((benefit, idx) => (
          <li key={idx} style={{ marginBottom: 0 }}>{benefit}</li>
        ))}
      </ul>
      {/* Screenshot */}
      <div style={{ display: "flex", justifyContent: "left" }}>
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
    <h2>Try It Out</h2>
    <div style={{ display: "flex", gap: "1rem", width: "100%", height: "250px" }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <label>POST JSON</label>
        <textarea
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          style={{ flex: 1, width: "100%" }}
        />
        <button onClick={handleTestApi} style={{ marginTop: "0.5rem" }}>
          Score Lead!
        </button>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <label>Response</label>
        <textarea
          value={responseBody}
          readOnly
          style={{ flex: 1, width: "100%" }}
        />
      </div>
      </div>
    </div>
  );
}
