import { Link } from 'react-router-dom'; // Importation du composant Link pour la navigation.

const Card = (props) => { // Définition du composant Card, utilisant des props pour la personnalisation.
    return (
        <Link
          className="ficheLogement background-primary col-desktop-3 col-mobile-1"
          to={`/logement/${props.id}`}
        >
          <div id={`ficheLogement-${props.id}`}>
            <img src={props.cover} alt="" />
            <h1 className="text-tertiary">{props.title}</h1>
          </div>
        </Link>
      );
    };

export default Card; // Exportation du composant Card pour qu'il puisse être utilisé ailleurs dans l'application.
