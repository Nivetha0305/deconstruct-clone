import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

import Shop from './components/Shop';

import Bestseller from './components/Bestseller';

import Offers from './components/Offers';
import Blog from './components/Blog'

import Track from './components/Track';

import Anti from './components/Anti';

function App() {
  return (
    <div>

      {/* Always show Header + Navbar */}
      
      <Header />
      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Content />
              <Product />

            </>
          }
        />

        {/* Shop Page */}
        <Route path="/shop" element={<Shop />} />
        <Route path='/bestsellers' element={<Bestseller />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/track' element={<Track />}/>
        
        <Route path='/antiacne' element={<Anti />} />
        {/* Not Found */}
        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
