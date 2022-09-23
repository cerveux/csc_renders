import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";


function Navegacion() {
  return (

    <nav  className="navbar navbar-dark bg-dark navbar-expand-md " >
  <div className="container-fluid" style={{maxWidth:"1150px"}}>
    <Link className="navbar-brand" to="/">CSC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-sm-center" id="navbarNav">
      <ul className="navbar-nav  ">
        {/* <li className="nav-item ">
          <Link className="nav-link" aria-current="page" to="/portfolio">Portfolio</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/about">Acerca de</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/servicios">Servicios</Link>
        </li>        
      </ul>
      <div className='socialmedia ' style={{textAlign:"center", marginLeft:"auto"}}>
          <a target="_blank" href="https://www.instagram.com/csc_arquitectura_inmuebles/"> <FontAwesomeIcon icon={faInstagram} style={{ color: "#b6b6b6" }} size="lg"  /> </a>
        </div>
        <a href=""></a>
    </div>
  </div>
  <div>

</div>
</nav>

    
       


    

  );
}

export default Navegacion;




