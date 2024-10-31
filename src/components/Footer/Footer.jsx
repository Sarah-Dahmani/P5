import logoDesktopFooter from "../../assets/Logo-Kasa-Desktop-Footer.png"; // Importation du logo à afficher dans le pied de page.

function Footer() {
    return (
        <footer className="footer text-white"> {/* Conteneur principal pour le pied de page */}
            <img src={logoDesktopFooter} alt="logo Kasa" className="footer__logo" /> {/* Affichage du logo avec un texte alternatif */}
            <p className="footer__text">© 2020 Kasa. All rights reserved</p> {/* Texte de copyright */}
        </footer>
    )
}

export default Footer; // Exportation du composant Footer pour qu'il puisse être utilisé dans d'autres fichiers.
