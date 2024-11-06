import { Navigate, useParams } from "react-router-dom"; // Importation des hooks pour la navigation et pour récupérer des paramètres d'URL.
import logementsJson from '../../data/logements'; // Importation des données des logements depuis un fichier JSON.
import Collapse from "../../components/Collapse/Collapse";
import Slide from "../../components/Slide/Slide"; // Importation du composant Slide pour afficher des images.
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";

const Location = () => {
    const { id } = useParams(); // Récupération de l'ID du logement depuis l'URL.
    
    // Filtrage des logements pour trouver celui qui correspond à l'ID
    const logements = logementsJson.filter((logement) => logement.id === id);
    // Si aucun logement n'est trouvé, redirection vers la page d'erreur
    if (logements.length === 0) {
      return <Navigate to="/Error" />;
    }
  
    const logement = logements[0]; // On récupère le premier logement trouvé

    return (
        <div className="logementBody">
        <div className="slideShow-container">
        {" "}
        <Slide slides={logement.pictures} />
  
        </div>
        <div className="logement-details">
        <div className="first-block col-mobile-1 col-desktop-2">
          <h1 className="text-primary">{logement.title}</h1>
          <div className="locationLogement">
            <span>{logement.location}</span>
          </div>
          <Tags tags={logement.tags} />
        </div>
        <div className="second-block  col-mobile-1 col-desktop-2">
          <Rating rating={logement.rating} />

          <Host host={logement.host} />
          </div>
        </div>
  
        {/* Sections repliables pour la description et les équipements */}
        <div className="collapseWrapperLogement d-flex-column">
        <Collapse titre="Description" cssClasses="col-mobile-1 col-desktop-2">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse titre="Equipements" cssClasses="col-mobile-1 col-desktop-2">
          <ul className="collapse-list-style-none">
            <ul>
              {logement.equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>; // Affichage de chaque équipement
              })}
            </ul>
            </ul>
          </Collapse>
        </div>
        </div>
    

    );
    };
       

export default Location; // Exportation du composant Location pour qu'il puisse être utilisé ailleurs dans l'application.
