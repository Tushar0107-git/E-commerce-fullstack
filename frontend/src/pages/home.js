import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />

      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        🛍️ Products
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center"
      }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;