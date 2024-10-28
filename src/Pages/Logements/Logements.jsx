import {Navigate, useParams} from "react-router-dom";
import logementsJson from '../../data/logements';
import "./logements.scss";
import Collapse from "../../components/Collapse/Collapse";

const Location = () => {
    const { id } = useParams();
    const logements = logementsJson.filter((l) => l.id === id);
    if (logements.length === 0) {
      return <Navigate to="/Error" />;
    }
  
    const logement = logements[0];
    return (
      <div>
        <div>Caroussel</div>
        <h1>{logement.title}</h1>
  
        <div className="HostLogement">
          {logement.host.name} - <img src={logement.host.picture} alt="host" />
        </div>
  
        <div className="LocationLogement">
        <span>{logement.location}</span>
        </div>
  
        <div className="DescriptionLogement">
        <p>{logement.description}</p>
        </div>
  
        <div className="TagLogement">
          {logement.tags.map((tag, index) => {
            return (
              <span className="badge" key={index}>
                {index} {tag}
              </span>
            );
          })}
        </div>
  
        <div className="starLogement">
        {Array.from(Array(5), (e, index) => {
          const starClass =
            index < logement.rating ? "fa-star-active" : "fa-star-inactive";
          const starClasses = `fa-solid fa-star ${starClass}`;
          return <i key={index} className={starClasses}></i>;
        })}
        </div>
  
        <div className="collapsesWrapperLogement">
          <Collapse titre="Description">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse titre="Equipements">
            <ul>
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