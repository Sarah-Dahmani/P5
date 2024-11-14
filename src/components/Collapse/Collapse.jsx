import React, { useState } from "react"; // Importation de React et du hook useState pour gérer l'état local.

const Collapse = (props) => {
  // Initialisation de l'état `isCollapsed` pour gérer si le contenu est affiché ou non.
  // `setIsCollapsed` permet de modifier cet état. Il est initialisé à `false` pour afficher le contenu par défaut.
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Initialisation de l'état `isInitialCollapsed` pour définir si la première fois que le composant est affiché, il est en mode "replié".
  // Cela permet d’ajouter un style ou une transition pour le premier affichage.
  const [isInitialCollapsed, setIsInitialCollapsed] = useState(true);

  // Création de la variable `classes` pour rassembler toutes les classes CSS du composant.
  // `props.cssClasses` permet d’ajouter des classes personnalisées. 
  // La classe `collapse` est ajoutée par défaut, et si `isCollapsed` est vrai, `collapsed` est ajouté. 
  // Si `isInitialCollapsed` est vrai, la classe `initial-collapsed` est ajoutée pour styliser le premier état.
  const classes =
    (props.cssClasses !== undefined ? props.cssClasses : "") +
    " collapse" +
    (isCollapsed ? " collapsed" : "") +
    (isInitialCollapsed ? " initial-collapsed" : "");

  return (
    // Application de toutes les classes CSS générées pour le conteneur principal du composant Collapse.
    <div className={classes}>
      {/* En-tête de la section repliable, affichant le titre et le bouton de bascule. */}
      <div className="collapse-header background-primary">
        <span className="collapse-title text-tertiary">{props.titre}</span>
        
        {/* Bouton qui inverse l'état `isCollapsed` pour afficher ou masquer le contenu */}
        <div
          className="button background-primary text-tertiary"
          onClick={() => {
            setIsCollapsed(!isCollapsed); // Bascule l'état entre affiché et masqué.
            
            // Si c'est la première fois que l'on clique, l'état `isInitialCollapsed` passe à `false`.
            if (isInitialCollapsed) {
              setIsInitialCollapsed(false);
            }
          }}
        >
          {/* Icône affichée dans le bouton, avec classe CSS pour l'afficher sous forme de chevron. */}
          <div className="fa-solid fa-chevron-up"></div>
        </div>
      </div>

      {/* Contenu repliable, affiché ou masqué en fonction de `isCollapsed`. */}
      <div className="collapse-content background-secondary">
        <div className="collapse-content-inner">
          {/* `props.children` permet d'afficher n'importe quel contenu passé entre les balises <Collapse></Collapse>. */}
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Collapse; // Exportation du composant Collapse pour pouvoir l'utiliser ailleurs.