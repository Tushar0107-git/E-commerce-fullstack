import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#111",
      color: "#fff",
      alignItems: "center"
    }}>
      <h2 style={{ margin: 0 }}>MyShop</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;