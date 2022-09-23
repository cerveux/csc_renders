import React from "react";
import Navegacion from "./Navegacion";
import { Outlet } from "react-router-dom";


function Header() {
    return (
        <>
        <header>
            <Navegacion />            
            <div className="header-logo">
                <img className="logo" src={require("../media/csclogo2.png")} alt="logo" />
                <p>- Somos la 4ta dimensión -</p>
            </div>
        </header>
        <div id="detail">
        <Outlet />
      </div>
        </>)
}

export default Header;