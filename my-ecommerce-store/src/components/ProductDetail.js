import React, { useState, useEffect } from 'react';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [match.params.id]);

  return (
    <div>
      <h2>Product Detail</h2>
      {product && (
        <div>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
