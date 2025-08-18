export default function Footer() {
  return (
    <footer style={{ background: "#111", color: "#aaa", padding: "1rem", textAlign: "center" }}>
      <p>© {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
}
