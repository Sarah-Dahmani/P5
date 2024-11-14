import { Navigate, useParams } from "react-router-dom"; // Importation des hooks pour la gestion des paramètres de l'URL et la redirection.
import logementsJson from "../../data/logements.json"; // Importation des données des logements depuis un fichier JSON.
import Collapse from "../../components/Collapse/Collapse"; // Importation du composant Collapse pour afficher des sections repliables.
import SlideShow from "../../components/SlideShow/SlideShow"; // Importation du composant SlideShow pour afficher les images du logement.
import Rating from "../../components/Rating/Rating"; // Importation du composant Rating pour afficher la note du logement.
import Tags from "../../components/Tags/Tags"; // Importation du composant Tags pour afficher les tags du logement.
import Host from "../../components/Host/Host"; // Importation du composant Host pour afficher les informations de l'hôte.

const Location = () => {
  // Récupération de l'ID du logement depuis l'URL grâce au hook useParams
  const { id } = useParams();

  // Filtrage des logements en fonction de l'ID récupéré dans l'URL
  const logements = logementsJson.filter((logement) => logement.id === id);

  // Si aucun logement n'est trouvé avec l'ID donné, on redirige vers la page d'erreur ("/Error")
  if (logements.length === 0) {
    return <Navigate to="/Error" />;
  }

  // Si un logement est trouvé, on récupère le premier élément (car l'ID est unique)
  const logement = logements[0];

  return (
    <div className="logementBody">
      {/* Conteneur pour le carrousel des images du logement */}
      <div className="slideShow-container">
        <SlideShow slides={logement.pictures} />
      </div>

      {/* Conteneur pour les détails du logement */}
      <div className="logement-details">
        <div className="first-block col-mobile-1 col-desktop-2">
          {/* Affichage du titre du logement */}
          <h1 className="text-primary">{logement.title}</h1>

          {/* Affichage de l'emplacement du logement */}
          <div className="locationLogement">
            <span>{logement.location}</span>
          </div>
          
          {/* Affichage des tags associés au logement */}
          <Tags tags={logement.tags} />
        </div>

        <div className="second-block col-mobile-1 col-desktop-2">
          {/* Affichage de la note du logement */}
          <Rating rating={logement.rating} />

          {/* Affichage des informations de l'hôte */}
          <Host host={logement.host} />
        </div>
      </div>

      {/* Conteneur pour les sections repliables de la description et des équipements */}
      <div className="collapseWrapperLogement d-flex-column">
        {/* Section repliable pour la description du logement */}
        <Collapse titre="Description" cssClasses="col-mobile-1 col-desktop-2">
          <p>{logement.description}</p>
        </Collapse>

        {/* Section repliable pour les équipements du logement */}
        <Collapse titre="Equipements" cssClasses="col-mobile-1 col-desktop-2">
          {/* Affichage de la liste des équipements */}
          <ul className="collapse-list-style-none">
            {logement.equipments.map((equipment, index) => {
              return <li key={index}>{equipment}</li>; // Pour chaque équipement, on crée un élément de liste
            })}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Location; // Exportation du composant Location pour qu'il puisse être utilisé dans d'autres parties de l'application.