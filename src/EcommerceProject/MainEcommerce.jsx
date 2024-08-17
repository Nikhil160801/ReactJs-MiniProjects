import { useState } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import Cart from './Cart';
import Footer from './Footer';

const products = [
  { id: 1, name: 'Apples', price: 2.99, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Bananas', price: 1.99, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Carrots', price: 3.49, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Bread', price: 2.49, image: 'https://via.placeholder.com/150' },
];

function MainEcommerce() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <Navbar cartCount={cartItems.length} />
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <div className="mt-8">
          <Cart cartItems={cartItems} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainEcommerce;
