const express = require('express');
const path = require('path');
const productsRoute = require('./routes/products');
const cartRoute = require('./routes/cart');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/products', productsRoute);
app.use('/cart', cartRoute);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Shopping app running on port ${PORT}`);
});

