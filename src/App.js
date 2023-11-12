import React from 'react';
import './App.css';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';

import { Home, Contact, Login, Register, Reset,ProductPage, Cart, ForgetPassword,About} from './pages';

import { Header, Footer } from './components';
import { UserProvider } from './pages/authority/UserContext'; // Adjust the path as needed
import { CartProvider } from './pages/cart/CartContext';



function App() {
  


  return (
    
    <UserProvider>
      <CartProvider>
     
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Header />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              <Route path="/products" element={<ProductPage/>} />

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="/reset" element={<Reset />} />

              <Route path="/cart" element={<Cart />} />

              
              


            </Routes>

           



          </div>
          

          <Footer />
        </BrowserRouter>
      </div>
      </CartProvider>
    </UserProvider>
    
    
  );
}

export default App;