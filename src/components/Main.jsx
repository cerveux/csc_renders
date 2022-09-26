import React from "react";
import Video from "./Video";
import CarouselContainer from "./CarouselContainer";
import Cita from "./Cita";
import ContactoMain from "./ContactoMain";
import Footer from "./Footer";

function Main() {
    return(
        <div className="formato-home">
        <main>
            <Video />
            <CarouselContainer />
            <Cita />
            <ContactoMain />                      
        </main>
        <Footer />
        </div>
        
    )
    
}

export default Main;