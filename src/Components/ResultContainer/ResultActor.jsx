import React from "react";

export const ResultActor = ({ item }) => {
  const { image, name, birthday, deathday, country } = item.person;

  return (
    <div className="resultBox d-flex flex-column align-items-center justify-content-center">
      <div className="image">
        <img
          src={
            image
              ? image.original
              : "/images/icon-image-not-found-free-vector.jpg"
          }
          className="rounded-4"
          alt=""
        />
      </div>
      <h5 className="my-3">{name}</h5>
      <p className="text-center summary">{`${
        country ? `Comes from ${country.name}` : "No Country known "
      }`}</p>
      <p className="text-center summary">{`Born ${
        birthday ? birthday : ""
      }`}</p>
      <p className="text-center summary">{`${
        deathday ? deathday : "Alive"
      }`}</p>
    </div>
  );
};
