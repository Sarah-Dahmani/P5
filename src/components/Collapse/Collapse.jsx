import React, { useState } from "react";

const Collapse = (props) => {
  //useState retourne un tableau de 2 éléments isCollapsed et setIsCollapsed
  //initialement c'est à false car il faut pouvoir faire apparaître le texte

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isInitialCollapsed, setIsInitialCollapsed] = useState(true);
  //si l'élément est étendu alors on lui ajoute la classe 'collapsed'
  //création de toutes les classes qui vont aller dans l'élément
  // 'collapse' et 'collapsed'

  const classes =
    (props.cssClasses !== undefined ? props.cssClasses : "") +
    " collapse" +
    (isCollapsed ? " collapsed" : "") +
    (isInitialCollapsed ? " initial-collapsed" : "");

  return (
    <div className={classes}>
      <div className="collapse-header background-primary">
        <span className="collapse-title text-tertiary">{props.titre}</span>
        <div
          className="button background-primary text-tertiary"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            if (isInitialCollapsed) {
              setIsInitialCollapsed(false);
            }
          }}
        >
          <div className="fa-solid fa-chevron-up"></div>
        </div>
      </div>
      <div className="collapse-content background-secondary">
        <div className="collapse-content-inner">{props.children}</div>
      </div>
    </div>
  );
};

export default Collapse;