import './collapse.scss';
import React, {useState} from 'react';

const Collapse = (props) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const collapsedClass = isCollapsed ? 'collapsed' : '';
    const classes = `collapse ${collapsedClass}`;
    return (
        <div className={classes}>
            <div className='collapse-header'>
                <span>{props.titre}</span>
                <button onClick={() => { 
                    setIsCollapsed(!isCollapsed);
                    } }>
                    <div className="fa-solid fa-chevron-up"></div>
                    </button>
            </div>
            <div className='collapse-content'>{props.children}</div>
            </div>
      );
    }

    export default Collapse 