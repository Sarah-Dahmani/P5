import { useState, useEffect } from "react";

const SlideShow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000; // Durée d'affichage de chaque image (en millisecondes)

  // Fonction pour passer à l'image suivante
  const nextIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > props.slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Définir un intervalle pour faire tourner le carrousel automatiquement
  useEffect(() => {
    const intervalId = setInterval(nextIndex, intervalTime);

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [currentIndex, props.slides.length]);

  // Fonction pour revenir à l'image précédente (si tu veux ajouter un contrôle manuel)
  const prevIndex = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? props.slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="SlideShow">
      {props.slides.length > 1 && (
        <div
          className="slideClick fa-solid fa-chevron-left text-tertiary"
          onClick={prevIndex}
          role="button"
        ></div>
      )}
      <div className="slidesWrapper">
        <img
          key={currentIndex}
          src={props.slides[currentIndex]}
          alt="photos"
          className="fade-in"
        />
        {props.slides.length > 1 && (
          <div className="slideshow-pagination hidden-mobile text-tertiary">
            {currentIndex + 1}/{props.slides.length}
          </div>
        )}
      </div>
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

export default SlideShow;
