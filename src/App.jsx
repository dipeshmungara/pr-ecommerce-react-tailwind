// import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Products } from './pages/Products';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container mx-auto px-3 sm:px-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />

          {/* Add a catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
