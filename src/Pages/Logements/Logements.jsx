import {Navigate, useParams} from "react-router-dom";
import logementsJson from '../../data/logements';
import "./logements.scss";
import Collapse from "../../components/Collapse/Collapse";

const Location = () => {
    const { id } = useParams();
    const logements = logementsJson.filter((l) => l.id === id );
    if(logements.length === 0) {
        return (<Navigate to ="/Error" />)
    }

    const logement = logements[0];
    return (
        <div>
            <div>Caroussel</div>
            <h1>{logement.title}</h1>
            <div>{logement.host.name} - <img src={logement.host.picture} alt="host" /></div>
            <span>{logement.location}</span>
            <p>{logement.description}</p>

            <div>
            {logement.tags.map( (tag, index) => { 
                return ( <span className="badge" key={index} >{index} {tag}</span>)
            })}
            </div>

            <div>Composant Rating : {logement.rating}</div>
            {
                Array.from(Array(5), (e,i) => {
                    const starClass = i < logement.rating ? "fa-star-active" : "fa-star-inactive";
                    const starClasses = `fa-solid fa-star ${starClass}`
                    return (
                        <i key={i} className={starClasses}></i>
                    )
                })
            }
             <div>Accordeon Description (paragraphe) 
                <Collapse titre="Description">
                    <p>
                    {logement.description}
                    </p>
                </Collapse> 
                <Collapse titre="Equipement">
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </Collapse>
            </div>
            <div>Accordeon Equipements (liste)</div>
        </div>
    )
}

export default Location