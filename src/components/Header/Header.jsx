import * as React from "react"; // Importation de React, nécessaire pour définir des composants.
import { NavLink } from 'react-router-dom'; // Importation de NavLink pour créer des liens de navigation avec une gestion active.
import logoDesktopHeader from "../../assets/Logo-Kasa-Desktop-Header.png"; // Importation de l'image du logo pour l'en-tête.

function Header() {
    return (
        <header className="header"> {/* Élément principal du composant d'en-tête */}
            
            {/* Lien vers la page d'accueil, incluant le logo avec une classe CSS pour le style */}
            <NavLink to="/"> 
                <img src={logoDesktopHeader} alt="logo Kasa" className="header__logo" /> {/* Affichage du logo avec un texte alternatif pour l'accessibilité */}
            </NavLink>
            
            {/* Navigation principale de l'en-tête */}
            <nav className="header__nav"> 
                
                {/* Lien vers la page d'accueil avec NavLink pour souligner la page active */}
                <NavLink to="/">Accueil</NavLink>
                
                {/* Lien vers la page "À propos" avec NavLink pour souligner la page active */}
                <NavLink to="/apropos">À propos</NavLink>
            </nav>
        </header>
    )
}

export default Header; // Exportation du composant Header pour qu'il puisse être importé et utilisé ailleurs dans l'application.