import './App.css';
import Home from './pages/home';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
      
      <Routes>
        <Route path="/home" element ={<Home />} ></Route>
        <Route path="/about" element ={<About />} ></Route>
        <Route path="/services" element ={<Services />} ></Route>
        <Route path="/contact" element ={<Contact />} ></Route>          
      </Routes>
      
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
