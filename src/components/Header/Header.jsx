import * as React from "react"; // Importation de React, nécessaire pour définir des composants.
import { NavLink } from 'react-router-dom'; // Importation de NavLink pour la navigation dans l'application.
import logoDesktopHeader from "../../assets/Logo-Kasa-Desktop-Header.png"; // Importation du logo à afficher dans l'en-tête.

function Header() {
    return (
        <header className="header"> {/* Conteneur principal pour l'en-tête */}
            <NavLink to="/"> {/* Lien vers la page d'accueil */}
                <img src={logoDesktopHeader} alt="logo Kasa" className="header__logo" /> {/* Affichage du logo avec un texte alternatif */}
            </NavLink>
            <nav className="header__nav"> {/* Conteneur pour la navigation */}
                <NavLink to="/">Accueil</NavLink> {/* Lien vers la page d'accueil */}
                <NavLink to="/apropos">À propos</NavLink> {/* Lien vers la page "À propos" */}
            </nav>
        </header>
    )
}

export default Header; // Exportation du composant Header pour qu'il puisse être utilisé dans d'autres fichiers.
