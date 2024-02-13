import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your Routes */}
        <Route path="/" element={<ProductList />} /> {/* Use element prop instead of component */}
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Use element prop instead of component */}
        <Route path="/cart" element={<ShoppingCart />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
