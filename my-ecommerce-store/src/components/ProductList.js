import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (productId) => {
    // Logic to add product to cart goes here
    console.log(`Product added to cart: ${productId}`);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
