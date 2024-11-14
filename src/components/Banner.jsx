const Banner = (props) => {
    // Création de la variable `classes`, qui combine la classe de base "banner" 
    // avec une classe supplémentaire passée par les props (props.css) pour une personnalisation flexible.
    const classes = "banner " + props.css;
  
    return (
      <div className={classes}> {/* Conteneur principal de la bannière, avec les classes définies */}
        <img src={props.bgImage} alt="banner" /> {/* Affichage de l'image de fond de la bannière avec une alternative "banner" */}
        
        {/* Si `props.children` est défini et non vide, afficher un conteneur supplémentaire `fond` */}
        {props.children !== undefined && props.children !== "" && (
          <div className="fond">
            <h1>{props.children}</h1> {/* Affichage du texte passé en tant qu'enfant du composant */}
          </div>
        )}
      </div>
    );
  };
  
  export default Banner; // Exportation du composant Banner pour qu'il puisse être utilisé ailleurs dans l'application.  