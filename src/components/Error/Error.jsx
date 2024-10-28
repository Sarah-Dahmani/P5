import {Link} from "react-router-dom"
import "./error.scss";

function Error() {
    return (
        <div className="error-container">

        <h1 className="error-code">404</h1>
        <p className="error-message">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="link-accueil">
          Retourner sur la page d'accueil
        </Link>
        </div>
    )
  }

  export default Error