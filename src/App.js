import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import Contacto from "./components/Contacto";
import About from "./components/About";




function App() {
  return (
    <div className="App">
 <Router >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Main />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/about" element={<About />} />            
          </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
