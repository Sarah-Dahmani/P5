import { Navigate, useParams } from "react-router-dom"; // Importation des hooks pour la navigation et pour récupérer des paramètres d'URL.
import logementsJson from '../../data/logements'; // Importation des données des logements depuis un fichier JSON.
import "./logements.scss"; // Importation des styles SCSS pour ce composant.
import Collapse from "../../components/Collapse/Collapse"; // Importation du composant Collapse pour des sections repliables.
import Slide from "../../components/Slide/Slide"; // Importation du composant Slide pour afficher des images.

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
        <div className="logementCardDetails">
          <div className="slideShow-container"> <Slide slides={logement.pictures}/> </div>
          <div className="logementTitleAndHost">
    
          <div className="logementTitleAndLocation">

        {/* Affichage du titre du logement */}
        <h1 className="text-primary">{logement.title}</h1>
  
        {/* Affichage de la localisation du logement */}
        <div className="LocationLogement">
          <span>{logement.location}</span>
        </div>
        </div>
  
        <div className="hostLogement">
       <div className="hostLogementName text-primary"> {logement.host.name}</div> <img className="hostLogementImg" src={logement.host.picture} alt="host" />
        </div>
  
        </div>

<div className="logementTagAndRating">
<div className="tagLogement">
          {logement.tags.map((tag, index) => {
            return (
              <span className="badge background-primary text-white" key={index}>
                {tag} {/* Correction pour ne pas afficher l'index devant le tag */}
              </span>
            );
          })}
        </div>
  
        {/* Affichage de l'évaluation du logement sous forme d'étoiles */}
        <div className="starLogement">
          {Array.from(Array(5), (e, index) => {
            const starClass = index < logement.rating ? "fa-star-active text-primary" : "fa-star-inactive"; // Détermination de la classe d'étoile active ou inactive
            const starClasses = `fa-solid fa-star ${starClass}`; // Création de la classe CSS pour l'icône d'étoile
            return <i key={index} className={starClasses}></i>; // Affichage de l'étoile
          })}
        </div>
        </div>
  
        {/* Sections repliables pour la description et les équipements */}
        <div className="collapsesWrapperLogement">
          <Collapse titre="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse titre="Equipements">
            <ul>
              {logement.equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>; // Affichage de chaque équipement
              })}
            </ul>
          </Collapse>
        </div>
        </div>
      </div>
    );
};

export default Location; // Exportation du composant Location pour qu'il puisse être utilisé ailleurs dans l'application.
