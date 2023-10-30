import React from 'react';
import './App.css';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import { Home, Contact, Login, Register, Reset,ProductContext} from './pages';
import { Header, Footer } from './components';
import { UserProvider } from './pages/authority/UserContext'; // Adjust the path as needed


function App() {
  


  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <BrowserRouter>
          <Header />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/products" element={<ProductContext/>} />

              <Route path="/login" element={<Login />} />
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