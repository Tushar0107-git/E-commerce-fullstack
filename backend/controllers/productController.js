const db = require("../config/db");

// GET ALL PRODUCTS
exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// ADD PRODUCT
exports.addProduct = (req, res) => {
  const { name, price, image } = req.body;

  db.query(
    "INSERT INTO products (name,price,image) VALUES (?,?,?)",
    [name, price, image],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Product added successfully" });
    }
  );
};