import React from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Contact, Login, Register, Reset, Menu } from './pages';
import { Header, Footer } from './components';
import { UserProvider } from './pages/authority/UserContext'; // Adjust the path as needed
=======
import {BrowserRouter, Route, Routes} from "react-router-dom";
//Pages
import {Home,Contact,Login,Register,Reset,ProductContext,Cart} from "./pages"
//components
import { Header,Footer } from './components';

>>>>>>> version_one



function App() {
  return (
<<<<<<< HEAD
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Header />
=======
    // sticky the footer at the bottom of web
    <div className='flex flex-col min-h-screen'>
          <BrowserRouter>
          <Header/>
    
    <div className='flex-grow'>
      {/* the main content is wrapped inside a div with the flex-grow class. This ensures it takes up all available space, pushing the footer down. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductContext />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
>>>>>>> version_one

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/productMenu" element={<Menu />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
            </Routes>
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
