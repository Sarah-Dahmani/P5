import React from 'react'; // Importation de React pour définir le composant.

// Définition du composant Rating, qui prend en compte des props pour personnaliser la notation.
const Rating = (props) => {
    return (
        <div className="starLogement"> {/* Conteneur principal pour les étoiles de notation */}
          
          {/* Création d'un tableau d'étoiles. La méthode Array.from crée un tableau de 5 éléments. */}
          {Array.from(Array(5), (e, index) => {
            
            // Vérifie si l'index de l'étoile actuelle est inférieur à la notation passée en props.
            // Si oui, l'étoile aura une classe d'étoile active, sinon elle sera inactive.
            const starClass =
              index < props.rating
                ? "fa-star-active text-primary" // Classe pour étoile active (remplie)
                : "fa-star-inactive";           // Classe pour étoile inactive (vide)
            
            // Création des classes CSS pour chaque étoile.
            const starClasses = `fa-solid fa-star ${starClass}`;
            
            // Retourne une icône étoile pour chaque itération, avec des classes et une clé unique.
            return <i key={index} className={starClasses}></i>;
          })}
        </div>
    );
};    

export default Rating; // Exportation du composant Rating pour utilisation dans d'autres fichiers.