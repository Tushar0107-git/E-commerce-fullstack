import { useState } from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );

      console.log("LOGIN SUCCESS:", res.data);

      localStorage.setItem("token", res.data.token);

      alert("Login Success");
    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data || err.message);

      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            width: "300px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Login</h2>

          <input
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
            }}
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
            }}
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
          />

          <button
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "10px",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;