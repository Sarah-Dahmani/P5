import * as React from "react";
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/apropos">À propos</NavLink>
        </nav>

    )
}

export default Header