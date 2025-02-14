import React, { useState, useEffect } from 'react';
import Product from './Product';

function Shop() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
  ]);

  return (
    <div>
      <h1>Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;
