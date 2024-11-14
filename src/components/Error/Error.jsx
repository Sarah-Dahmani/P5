import { Link } from "react-router-dom"; // Importation du composant Link pour la navigation entre pages sans rechargement.

function Error() {
  // Composant Error, qui affiche un message d'erreur pour une page inexistante.
  return (
    <div className="error-container">
      {/* Code d'erreur HTTP 404 pour indiquer que la page n'a pas été trouvée. */}
      <h1 className="error-code text-primary">404</h1>

      {/* Message d'erreur indiquant que la page demandée est introuvable. */}
      <p className="error-message text-primary">
        Oups ! La page que vous demandez n'existe pas.
      </p>

      {/* Lien de retour vers la page d'accueil. Utilisation de `Link` pour une navigation rapide. */}
      <Link to="/" className="link-accueil">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error; // Exportation du composant Error pour qu'il soit disponible dans d'autres fichiers.