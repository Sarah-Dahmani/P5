import "./Slide.scss"; // Importation des styles SCSS pour le composant Slide.
import { useState } from "react"; // Importation du hook useState de React pour gérer l'état local.

const Slide = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0); // Déclaration de l'état local pour l'index actuel, initialisé à 0.

    // Fonction pour passer à l'image suivante
    const nextIndex = () => {
        // Si l'index actuel est le dernier élément, on revient au premier, sinon on passe à l'élément suivant
        setCurrentIndex(currentIndex + 1 > props.slides.length - 1 ? 0 : currentIndex + 1);
    };

    // Fonction pour revenir à l'image précédente
    const prevIndex = () => {
        setCurrentIndex(currentIndex - 1 < 0 ? props.slides.length - 1 : currentIndex - 1);
      };
      return (
        //les boutons ne s'affichent que si l'index du tableau slides est supérieur à 1 (+ d'une image)
        //la pagination affiche currentIndex + 1 car la 1ère img = index 0 / le taille du tableau slides
        <div className="SlideShow">
          {props.slides.length > 1 && (<div className="slideClick fa-solid fa-chevron-left text-white"onClick={prevIndex} role="button"></div>
          )}
          <div className="slidesWrapper">
            <img key={currentIndex} src={props.slides[currentIndex]} alt="photos" />
            {props.slides.length > 1 && (<div className="slideshow-pagination text-white">{currentIndex + 1}/{props.slides.length}</div>)}
             </div>
             {props.slides.length > 1 && (<div className="slideClick fa-solid fa-chevron-right text-white" onClick={nextIndex} role="button"></div>
      )}
    </div>
  );
};

export default Slide; // Exportation du composant Slide pour qu'il puisse être utilisé dans d'autres fichiers.
