import React from "react";
import Video from "./Video";
import CarouselContainer from "./CarouselContainer";
import Cita from "./Cita";
import ContactoMain from "./ContactoMain";
import Footer from "./Footer";

function Main() {
    return(
        <>
        <main>
            <Video />
            <CarouselContainer />
            <Cita />
            <ContactoMain />                      
        </main>
        <Footer />
        </>
        
    )
    
}

export default Main;