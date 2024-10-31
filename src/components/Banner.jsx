import '../SASS/components/banner.scss'; // Importation des styles SCSS spécifiques au composant Banner.

const Banner = (props) => {
    const classes = 'banner' + props.css;
    return (
        <div className='banner'> {/* Conteneur principal pour le composant Banner */}
            <img src={props.bgImage} alt="banner" /> {/* Affichage de l'image de fond passé en tant que prop */}
            
            { (props.title !== undefined && props.title !== "") && 
                <div className="fond"> {/* Conteneur pour le titre, seulement affiché si une valeur valide est fournie */}
                    <h1>{props.title}</h1> {/* Affichage du titre passé en tant que prop */}
                </div>
            }
        </div>
    )
}

export default Banner; // Exportation du composant Banner pour qu'il puisse être utilisé dans d'autres fichiers.
