import { Outlet } from "react-router-dom"; // Importation du composant Outlet pour afficher les routes imbriquées.
import Header from "../Header/Header"; // Importation du composant Header.
import Footer from "../Footer/Footer"; // Importation du composant Footer.

const Layout = () => { // Définition du composant fonctionnel Layout.
    return (
        <>
            <Header /> {/* Affichage du composant Header en haut de la page */}
            <Outlet /> {/* Le composant Outlet sert de point d'insertion pour les routes imbriquées */}
            <Footer /> {/* Affichage du composant Footer en bas de la page */}
        </>
    )
}

export default Layout; // Exportation du composant Layout pour qu'il puisse être utilisé ailleurs dans l'application.
