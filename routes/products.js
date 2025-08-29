const express = require('express');
const router = express.Router();

// Simulated product data
const products = [
  { id: 1, name: 'Laptop', price: 750 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Headphones', price: 120 }
];

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;

