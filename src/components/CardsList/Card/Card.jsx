// Importation du composant Link depuis react-router-dom pour permettre la navigation sans recharger la page.
import { Link } from 'react-router-dom';

// Définition du composant fonctionnel Card. Il reçoit des props qui personnalisent le contenu et le comportement du composant.
const Card = (props) => { 
    return (
        // Utilisation de Link pour créer un lien vers une route spécifique "/logement/{id}".
        // Cela permet de rediriger l’utilisateur vers la page de détails du logement sans recharger la page.
        <Link
          className="ficheLogement background-primary col-desktop-3 col-mobile-1" // Classe CSS pour le style et la mise en page en fonction du type d’écran.
          to={`/logement/${props.id}`} // Lien dynamique vers l’identifiant du logement pour une navigation spécifique.
        >
          <div id={`ficheLogement-${props.id}`}> {/* Conteneur principal de la carte de logement, avec un identifiant unique basé sur l'ID du logement */}
            
            <img src={props.cover} alt="" /> {/* Image du logement, avec src correspondant à la couverture (cover) fournie dans les props */}
            
            <h1 className="text-tertiary">{props.title}</h1> {/* Titre du logement, affiché sous l'image */}
          
          </div>
        </Link>
      );
};

// Exportation du composant Card pour le rendre réutilisable dans d'autres parties de l'application.
export default Card; 