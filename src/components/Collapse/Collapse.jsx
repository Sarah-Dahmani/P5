
import React, { useState } from 'react'; // Importation de React et du hook useState pour gérer l'état local.

const Collapse = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false); // État pour gérer l'ouverture ou la fermeture de l'élément.
    
    // Classe conditionnelle pour appliquer un style différent lorsque l'élément est replié.
    // 'collapse' et 'collapsed' 
    const classes = (props.cssClasses !== undefined ? props.cssClasses : '' ) + " collapse" + ( isCollapsed ? ' collapsed' : '' );
    return (
        <div className={classes}> {/* Conteneur principal avec les classes CSS appropriées */}
            <div className='collapse-header background-primary'>
                <span className='collapse-title text-tertiary'>{props.titre}</span>
                <div className='button background-primary text-tertiary' onClick={() => { 
                         setIsCollapsed(!isCollapsed); // Inversion de l'état isCollapsed
                }}>
                    <div className="fa-solid fa-chevron-up"></div> {/* Icône de flèche (chevron) */}
                </div>
            </div>
            <div className="collapse-content background-secondary">
            <div className="collapse-content-inner">{props.children}</div>
            </div>
             </div>
    );
}

export default Collapse; // Exportation du composant Collapse pour qu'il puisse être utilisé ailleurs.
