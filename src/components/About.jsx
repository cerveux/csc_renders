import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-regular-svg-icons';
import Footer from "./Footer";


export default function About() {
    return (
        <>
            <main>
                <div className="about-container">
                <FontAwesomeIcon icon={faBuilding} className="edificio"  />
                <i class="bi bi-instagram"></i>
                <h1 style={{fontSize:"50px", fontWeight: "700", marginBottom: "45px"}}>
                    Acerca de | About
                </h1>
                
                <p>CSC es un estudio de visualización 3D para arquitectura, especializado en renders de exteriores e interiores. Hemos trabajado en una gran variedad de proyectos a lo largo de nuestra trayectoria. Estamos orgullosos de poder ayudar siempre a nuestros clientes y llevar sus ideas a un siguiente nivel.</p>
                <p></p>
                <p>CSC is a 3D visualization studio for architecture, specialized in exterior and interior renderings. We have worked on a wide variety of projects throughout our history. We are happy on always being able to help our customers and bring their ideas to a new level.</p>


                </div>
                
            </main>
            <Footer />

        </>
    )
}