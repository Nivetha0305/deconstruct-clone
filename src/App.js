import './App.css';
import Content from './components/Content';
import Header from './components/Header';
// import Product from './components/Product';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import Shop from './components/Shop';

import Bestseller from './components/Bestseller';

import Offers from './components/Offers';
import Blog from './components/Blog'
import Cart from './components/Cart';
import Track from './components/Track';
import { ProductContext } from './components/ProductContext';
import  CartProvider  from './components/CartContext';

// import Anti from './components/Anti';

function App() {
  return (
    <ProductContext>
      <CartProvider>
        {/* Always show Header + Navbar */}

        <Header />
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Content />} />

          {/* Shop Page */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/bestsellers" element={<Bestseller />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/track" element={<Track />} />

          <Route path="/cart" element={<Cart />} />

          {/* Not Found */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer />
      </CartProvider>
    </ProductContext>
  );
}

export default App;
