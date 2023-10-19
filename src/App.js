import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
//Pages
import {Home,Contact,Login,Register,Reset} from "./pages"
//components
import { Header,Footer } from './components';


function App() {
  return (
    // sticky the footer at the bottom of web
    <div className='flex flex-col min-h-screen'>
          <BrowserRouter>
          <Header/>
    
    <div className='flex-grow'>
      {/* the main content is wrapped inside a div with the flex-grow class. This ensures it takes up all available space, pushing the footer down. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
      </Routes>

    </div>

    <Footer/>
    </BrowserRouter>

    </div>

    
  );
}

export default App;
