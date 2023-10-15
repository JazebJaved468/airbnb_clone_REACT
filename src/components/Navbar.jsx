import React from "react";
import "../css/Navbar.css";
import logo from "../images/nav-logo.svg";

export default function Navbar(){
    return(
        <>
            <nav className="navbar-container">

                {/* Logo */}
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
                
            </nav>
        </>
    )
}