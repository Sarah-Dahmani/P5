import React from 'react'; // Importation de React, nécessaire pour définir des composants.

const Tags = (props) => {
  return (
    <div className="tagLogement"> {/* Conteneur principal pour tous les tags */}
      {props.tags.map((tag, index) => { // Boucle sur chaque tag fourni dans props.tags.
        return (
          <span 
            className="badge background-primary text-tertiary" // Classe pour le style du tag.
            key={index} // Clé unique pour chaque élément de la liste basée sur l'index du tag.
          >
            {tag} {/* Affichage du texte du tag */}
          </span>
        );
      })}
    </div>
  );
};

export default Tags; // Exportation du composant Tags pour qu'il puisse être utilisé ailleurs dans l'application.