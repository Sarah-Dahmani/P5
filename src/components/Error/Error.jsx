import { Link } from "react-router-dom"; // Importation du composant Link pour gérer la navigation.
import "./error.scss"; // Importation des styles SCSS spécifiques au composant d'erreur.

function Error() {
    return (
        <div className="error-container"> {/* Conteneur principal pour la page d'erreur */}
            <h1 className="error-code text-primary">404</h1> {/* Affichage du code d'erreur 404 */}
            <p className="error-message text-primary">Oups ! La page que vous demandez n'existe pas.</p> {/* Message d'erreur informatif */}
            <Link to="/" className="link-accueil"> {/* Lien vers la page d'accueil */}
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error; // Exportation du composant Error pour qu'il puisse être utilisé dans d'autres fichiers.
