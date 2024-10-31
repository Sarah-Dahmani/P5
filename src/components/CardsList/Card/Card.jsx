import { Link } from 'react-router-dom'; // Importation du composant Link pour la navigation.
import './Card.scss'; // Importation des styles SCSS spécifiques au composant Card.

const Card = (props) => { // Définition du composant Card, utilisant des props pour la personnalisation.
    return (
        <Link className='ficheLogement background-primary col-desktop-3 col-mobile-1' to={`/logement/${props.id}`  } >    
        <div id={`ficheLogement-${props.id}`}> {/* Conteneur principal avec un id unique basé sur l'id du logement */}
                <img src={props.cover} alt=""/> {/* Affichage de l'image de couverture du logement */}
                <h1 className='text-white'>{props.title}</h1> {/* Affichage du titre du logement */}
                <div>{props.children}</div> {/* Affichage des enfants, permettant de passer du contenu additionnel */}
            </div>
        </Link>
    )
}

export default Card; // Exportation du composant Card pour qu'il puisse être utilisé ailleurs dans l'application.
