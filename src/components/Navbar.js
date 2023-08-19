
import React from 'react'
import logo from '../assets/images/logo.png'
import { NavLink } from "react-router-dom";
function Navbar(){
    return (
        <>
            <header className="bloc-nav">
                <div>
                    <img src={logo} className="logo" alt="logo" />
                </div>               
                <nav className="links">
                    <div className="link"> 
                        <NavLink
                            to="/"
                            className= { ({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>
                            Accueil
                        </NavLink>
                    </div>

                    <div className="link"> 
                        <NavLink
                            to="about"
                            className= { ({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>
                            A propos
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Navbar