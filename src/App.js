import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Contacto from "./components/Contacto";
import About from "./components/About";
import Servicios from "./components/Servicios";
import Modal from "./components/Modal";




function App() {
  
  return (
    <div className="App">
 <BrowserRouter >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Main />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/servicios" element={<Servicios />} />           
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
