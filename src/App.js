import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/" element={<Contact/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
