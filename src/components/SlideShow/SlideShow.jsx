import { useState, useEffect } from "react"; // Importation des hooks useState et useEffect.

const SlideShow = (props) => {
  // Initialisation de l'état currentIndex, représentant l'index de l'image actuelle.
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // Durée d'affichage de chaque image en millisecondes (3 secondes ici).

  // Fonction pour passer à l'image suivante.
  const nextIndex = () => {
    // Utilise setCurrentIndex pour incrémenter l'index de l'image. 
    // Si l'index actuel est le dernier du tableau, il revient au premier (cycle infini).
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > props.slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Définition d'un intervalle pour faire tourner le carrousel automatiquement.
  useEffect(() => {
    const intervalId = setInterval(nextIndex, intervalTime); // Lance nextIndex toutes les `intervalTime` ms.

    // Nettoyage de l'intervalle lorsque le composant est démonté.
    return () => clearInterval(intervalId);
  }, [currentIndex, props.slides.length]); // Dépend de currentIndex et de la longueur de props.slides pour se mettre à jour.

  // Fonction pour revenir à l'image précédente.
  const prevIndex = () => {
    // Utilise setCurrentIndex pour décrémenter l'index. 
    // Si l'index est le premier, il passe au dernier.
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? props.slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="SlideShow"> {/* Conteneur principal du carrousel */}
      
      {/* Bouton pour passer à l'image précédente (affiché seulement si plus d'une image) */}
      {props.slides.length > 1 && (
        <div
          className="slideClick fa-solid fa-chevron-left text-tertiary"
          onClick={prevIndex}
          role="button"
        ></div>
      )}

      {/* Conteneur de l'image actuelle */}
      <div className="slidesWrapper">
        <img
          key={currentIndex} // Clé pour forcer le rechargement de l'image à chaque changement d'index.
          src={props.slides[currentIndex]} // Source de l'image actuelle.
          alt="photos" // Texte alternatif pour l'image.
          className="fade-in" // Classe pour l'animation de transition.
        />
        
        {/* Pagination : affiche le numéro de l'image actuelle et le total */}
        {props.slides.length > 1 && (
          <div className="slideshow-pagination hidden-mobile text-tertiary">
            {currentIndex + 1}/{props.slides.length}
          </div>
        )}
      </div>
      
      {/* Bouton pour passer à l'image suivante (affiché seulement si plus d'une image) */}
      {props.slides.length > 1 && (
        <div
          className="slideClick fa-solid fa-chevron-right text-tertiary"
          onClick={nextIndex}
          role="button"
        ></div>
      )}
    </div>
  );
};

export default SlideShow; // Exportation du composant SlideShow pour l'utiliser ailleurs dans l'application.