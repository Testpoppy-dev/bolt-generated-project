const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
  ];

  res.json(products);
});

module.exports = router;
