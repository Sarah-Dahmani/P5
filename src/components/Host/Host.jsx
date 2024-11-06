import React from 'react';

const Host = (props) => {
    return (
        <div className="hostLogement">
        <div className="hostLogementName text-primary">
          {props.host.name}
        </div>
        <img className="hostLogementImg" src={props.host.picture} alt="host" />
      </div>
    );
}

export default Host;