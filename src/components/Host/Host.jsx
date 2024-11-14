import React from 'react'; // Importation de React pour définir le composant.

// Définition du composant Host qui reçoit des props pour afficher les informations de l'hôte.
const Host = (props) => {
    return (
        <div className="hostLogement"> {/* Conteneur principal pour l'information de l'hôte */}
            
            {/* Affichage du nom de l'hôte avec une classe pour le style */}
            <div className="hostLogementName text-primary">{props.host.name}</div> 
            
            {/* Affichage de la photo de l'hôte avec un texte alternatif pour l'accessibilité */}
            <img className="hostLogementImg" src={props.host.picture} alt="host" /> 
        </div>
    );
};

export default Host; // Exportation du composant Host pour qu'il puisse être utilisé dans d'autres fichiers.