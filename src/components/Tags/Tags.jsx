import React from 'react';

const Tags = (props) => {
    return (
        <div className="tagLogement">
        {
            props.tags.map((tag, index) => {
            return (
              <span className="badge background-primary text-tertiary" key={index}>
                {tag}
              </span>
            );
          })
        }
        </div>
    );
}

export default Tags;