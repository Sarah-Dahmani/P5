import logoDesktopFooter from "../../assets/Logo-Kasa-Desktop-Footer.png"; // Importation de l'image du logo à afficher dans le pied de page.

function Footer() {
    return (
        <footer className="footer text-tertiary"> {/* Élément principal pour le pied de page, avec des classes CSS pour le style */}
            
            {/* Affichage du logo du pied de page. Le texte alternatif "logo Kasa" améliore l'accessibilité */}
            <img src={logoDesktopFooter} alt="logo Kasa" className="footer__logo" />

            {/* Texte de copyright avec l'année 2020 et la mention "All rights reserved" */}
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer; // Exportation du composant Footer pour qu'il puisse être importé et utilisé dans d'autres parties de l'application.