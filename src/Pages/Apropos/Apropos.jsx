import Banner from "../../components/Banner"; // Importation du composant Banner pour afficher une bannière en haut de la page.
import imgBannerAbout from "../../assets/Banner-About.png"; // Importation de l'image à utiliser comme arrière-plan pour la bannière "À propos".
import Collapse from "../../components/Collapse/Collapse"; // Importation du composant Collapse pour afficher des sections repliables.
import aproposJson from "../../data/apropos.json"; // Importation des données "À propos" depuis un fichier JSON.

const Apropos = () => {
  return (
    <div className="a-propos">
      {/* Conteneur principal pour la page "À propos" */}
      <div className="container-banner-apropos">
        {/* Affichage de la bannière avec l'image de fond (bgImage) et un texte alternatif (alt) */}
        <Banner bgImage={imgBannerAbout} alt="montagne et forêt" />
      </div>

      {/* Conteneur pour les sections repliables "À propos" */}
      <div className="container-CollapseApropos">
        {/* 
          Utilisation de la méthode map pour itérer sur chaque élément du fichier JSON "aproposJson".
          Pour chaque élément, une section repliable est créée avec un titre et une description.
        */}
        {aproposJson.map((item, index) => {
          return (
            <Collapse key={index} titre={item.title}>
              {item.description}
            </Collapse>
          );
        })}
      </div>
    </div>
  );
}

export default Apropos; // Exportation du composant Apropos pour qu'il puisse être utilisé ailleurs dans l'application.