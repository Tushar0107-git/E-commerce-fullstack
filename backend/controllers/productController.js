const db = require("../config/db");

// GET ALL PRODUCTS
exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// GET SINGLE PRODUCT
exports.getProductById = (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM products WHERE id = ?",
    [id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      res.json(result[0]);
    }
  );
};

// ADD PRODUCT
exports.addProduct = (req, res) => {
  const { name, price, image } = req.body;

  db.query(
    "INSERT INTO products (name, price, image) VALUES (?, ?, ?)",
    [name, price, image],
    (err) => {
      if (err) return res.status(500).json(err);

      res.status(201).json({
        message: "Product added successfully",
      });
    }
  );
};