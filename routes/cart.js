const express = require('express');
const router = express.Router();

let cart = [];

router.get('/', (req, res) => {
  res.json(cart);
});

router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  if (!productId || !quantity) {
    return res.status(400).json({ message: "Invalid request" });
  }
  cart.push({ productId, quantity });
  res.json({ message: "Item added to cart", cart });
});

module.exports = router;

