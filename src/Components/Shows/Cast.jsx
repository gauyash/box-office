import React from "react";

export const Cast = ({ castData }) => {
    
  const castElements = castData.map((castItem) => {
    const { character, person } = castItem;
    let personImage = null;
    if (character.image) {
      personImage = character.image.original;
    } else if (person.image) {
      personImage = person.image.original;
    } else {
      personImage = "/images/icon-image-not-found-free-vector.jpg";
    }

    return (
      <div
        key={character.id}
        className="d-flex align-items-center gap-4 cast-col"
      >
        <img loading="lazy" src={personImage} alt="" className="cast-image" />
        <div className="cast-text d-flex align-itms-center gap-1">
          <h6>{character.name}</h6>
          <span>|</span>
          <h6>{person.name}</h6>
        </div>
      </div>
    );
  });
  return <>{castElements}</>;
};
