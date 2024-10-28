import { Link } from 'react-router-dom'
import './Card.scss'

const Card = (props) => {
    return (
        <Link className='ficheLogement' to={`/logement/${props.id}`  } >
            <div  id={`ficheLogement-${props.id}`}>
                <img src={props.couverture} alt=""/>
                <h1>{props.titre}</h1>
                <div>{props.children}</div>
            </div>
        </Link>
    )
}

export default Card