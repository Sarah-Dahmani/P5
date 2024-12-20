import Banner from "../../components/Banner"; // Importation du composant Banner pour afficher une bannière en haut de la page.
import imgBannerHome from '../../assets/IMG.png'; // Importation de l'image à utiliser comme arrière-plan pour la bannière d'accueil.
import logements from "../../data/logements.json"; // Importation des données des logements depuis un fichier JSON.
import Card from "../../components/CardsList/Card/Card"; // Importation du composant Card pour afficher les logements sous forme de cartes.

const Accueil = () => {
  return (
    <>
      <div className="container-bannerhome">
        {/* Affichage de la bannière avec un titre et une image de fond, avec des classes CSS pour la personnalisation du style sur mobile et desktop */}
        <Banner css="hidden-mobile" bgImage={imgBannerHome} alt="falaise et océan" >
          Chez vous, partout et ailleurs
        </Banner>

        <Banner css="hidden-desktop align-left" bgImage={imgBannerHome} alt="falaise et océan" >
          Chez vous, <br />partout et ailleurs
        </Banner>
      </div>

      <div className="container-cardsList">
        <div className="CardsListWrapper bd-block"> {/* Conteneur pour la liste des cartes de logements */}
          {
            // Pour chaque logement dans le tableau `logements`, une carte (Card) est générée avec ses informations
            logements.map((logement) => (
              // Chaque carte reçoit une clé unique avec l'ID du logement et les autres informations (titre et image de couverture)
              <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Accueil; // Exportation du composant Accueil pour qu'il puisse être utilisé ailleurs dans l'application.