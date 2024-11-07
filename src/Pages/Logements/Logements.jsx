import { Navigate, useParams } from "react-router-dom";
import logementsJson from "../../data/logements.json"; 
import Collapse from "../../components/Collapse/Collapse";
import SlideShow from "../../components/SlideShow/SlideShow";
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";

//hook useParams prend les paramètres de l'URL définis dans les routes : ici 'id'
//on filtre les logements par id dans le fichier json
//le filtre renvoie le tableau logements contenant 0 ou 1 logement (défini dans les paramètres)
//dans le cas de 0 logement, aucun logement avec l'id n'a été trouvé
//redirection page Error

const Location = () => {
  const { id } = useParams();
  const logements = logementsJson.filter((logement) => logement.id === id);
  if (logements.length === 0) {
    return <Navigate to="/Error" />;
  }

  const logement = logements[0];
  return (
    <div className="logementBody">
      <div className="slideShow-container">
        <SlideShow slides={logement.pictures} />
      </div>

      <div className="logement-details">
        <div className="first-block col-mobile-1 col-desktop-2">
          <h1 className="text-primary">{logement.title}</h1>

          <div className="locationLogement">
            <span>{logement.location}</span>
          </div>
          
          <Tags tags={logement.tags} />
        </div>
      
        <div className="second-block  col-mobile-1 col-desktop-2">
          <Rating rating={logement.rating} />

          <Host host={logement.host} />
        </div>
      </div>
      
      <div className="collapseWrapperLogement d-flex-column">
        <Collapse titre="Description" cssClasses="col-mobile-1 col-desktop-2">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse titre="Equipements" cssClasses="col-mobile-1 col-desktop-2">
          <ul className="collapse-list-style-none">
            {logement.equipments.map((equipment, index) => {
              return <li key={index}> {equipment}</li>;
            })}
          </ul>
        </Collapse>
      </div>

    </div>
  );
};

export default Location;