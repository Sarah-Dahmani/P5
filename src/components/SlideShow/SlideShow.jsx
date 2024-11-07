import { useState } from "react";

const SlideShow = (props) => {
  //useState retourne un tableau avec les 2 éléments currentIndex et setCurrentIndex
  //setCurrentIndex permet de modifier la valeur de currentIndex
  const [currentIndex, setCurrentIndex] = useState(0);

  //fonction next : si le currentindex + 1 est supérieur ou égal à l'index -1 (dernier élément)
  //alors currentindex = 0 (1er élément) sinon +1
  const nextIndex = () => {
    setCurrentIndex(
      currentIndex + 1 > props.slides.length - 1 ? 0 : currentIndex + 1
    );
  };
  //fonction prev : si le currentindex - 1 est inférieur à l'index 0 (1er élément)
  //alors currentindex passe au dernier index (dernier élément)
  const prevIndex = () => {
    setCurrentIndex(
      currentIndex - 1 < 0 ? props.slides.length - 1 : currentIndex - 1
    );
  };
  return (
    //les boutons ne s'affichent que si l'index du tableau slides est supérieur à 1 (+ d'une image)
    //la pagination affiche currentIndex + 1 car la 1ère img = index 0 / le taille du tableau slides
    <div className="SlideShow">
      {props.slides.length > 1 && (
        <div
          className="slideClick fa-solid fa-chevron-left text-tertiary"
          onClick={prevIndex}
          role="button"
        ></div>
      )}
      <div className="slidesWrapper">
        <img key={currentIndex} src={props.slides[currentIndex]} alt="photos" />
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