import React from "react";
import ContactoMain from "./ContactoMain";
import Footer from "./Footer";
import Header from "./Header";



export default function Contacto(){
    return(      
        <div className="contato-contacto">
           <div className="contacto-title">
            <h1 style={{fontSize:"4rem"}}>Hablemos de tu proyecto!!!</h1>
            <ContactoMain />
        </div>
        <Footer />
        </div>
    )

}