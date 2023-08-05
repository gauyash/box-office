import React from "react";
import { Link } from "react-router-dom";

export const ResultShows = ({ item, handleStar, star }) => {
  const { image, name, summary, id } = item.show;

  const parser = new DOMParser();
  const doc = parser.parseFromString(summary, "text/html");
  const summaryInnerText = doc.body.textContent;

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
      <h6 className="my-3">{name}</h6>
      <p className="text-center summary">{`${summaryInnerText.substring(
        0,
        70
      )}...`}</p>
      <div className="d-flex gap-4 mt-3 align-items-center">
        <Link className="read-more" to={`/box-office/show/${id}`}>
          Read More
        </Link>
        <button
          onClick={() => {
            handleStar(id);
          }}
          className={`rounded starred-button ${
            star.includes(id) ? "active" : ""
          }`}
        >
          <ion-icon name="star"></ion-icon>
        </button>
      </div>
    </div>
  );
};
