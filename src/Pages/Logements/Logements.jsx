import {Navigate, useParams} from "react-router-dom";
import logementsJson from '../../data/logements';
import "./logements.scss"

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

            <div>{logement.tags.map( tag => { 
                return ( <span class="badge">{tag}</span>)
            })}</div>

            <div>Composant Rating</div>
            <div>Accordeon Description (paragraphe)</div>
            <div>Accordeon Equipements (liste)</div>
        </div>
    )
}

export default Location