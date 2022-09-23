import React from "react";
import Mailito from "./Mailito";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function ContactoMain() {
    return (


        <div className="container text-center contacto-container">
            <div className="row justify-content-center justify-content-sm-center justify-content-lg-evenly">
                <div className="col-11 col-sm-10 col-md-6 col-lg-5">
                <h2 className="titulo-contacto">Contacto</h2>
                <h5 className="pregunta-contacto">¿Te interesa saber cómo podemos colaborar en algún proyecto? Contáctame hoy mismo.</h5>
                <h5 className="mail-contacto">cyn.solcabral@gmail.com</h5>
                <h5 className="tel-contacto">
                    <a target="_blank" href="https://wa.link/rccy82" style={{color:"#128c7e"}} ><FontAwesomeIcon icon={faWhatsapp} size="lg" beat /></a>
                         +54 9 (351) 746-0026
                      </h5> 
                </div>
                
                <div className="col-11 col-sm-10 col-md-6 col-lg-5">
                <Mailito />
                </div>
                
            </div>
        </div>







    )
}

export default ContactoMain;

