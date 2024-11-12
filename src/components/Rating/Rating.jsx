import React from 'react';

const Rating = (props) => {
    return (
        <div className="starLogement">
          {Array.from(Array(5), (e, index) => {
            const starClass =
              index < props.rating
                ? "fa-star-active text-primary"
                : "fa-star-inactive";
            const starClasses = `fa-solid fa-star ${starClass}`;
            return <i key={index} className={starClasses}></i>;
          })}
        </div>
      );
    };    

export default Rating; 