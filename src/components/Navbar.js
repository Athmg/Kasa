
import React from 'react'
import logo from '../assets/images/logo.png'
import{Link} from "react-router-dom"
function Navbar(){
    return (
        <>
            <header className="bloc-nav">
                <div>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <nav className="links">
                    <div className="link"><Link to="/">Accueil</Link></div>
                    <div className="link"><Link to="about">A propos</Link></div>
                </nav>
            </header>
        </>
    );
}
export default Navbar