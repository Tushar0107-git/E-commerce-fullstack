function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: "12px",
      padding: "15px",
      width: "200px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "0.3s",
      background: "#fff"
    }}>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3 style={{ margin: "10px 0" }}>{product.name}</h3>

      <p style={{ color: "green", fontWeight: "bold" }}>
        ₹{product.price}
      </p>

      <button style={{
        padding: "8px 12px",
        background: "#111",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
      }}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;