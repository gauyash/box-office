import React, { useEffect, useState } from "react";
import { searchForShows } from "../Api/api";
import { Link } from "react-router-dom";

export const Starred = ({ star, handleStar }) => {
  const [starredData, setStarredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const starredArray = JSON.parse(localStorage.getItem("star"));

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const newStarredArray = await Promise.all(
          starredArray.map((itemId) =>
            searchForShows(`/shows/${itemId}`).then((data) => data)
          )
        );
        setStarredData(newStarredArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching show data:", error);
      }
    };

    fetchShowData();
  }, []);
  if (loading) {
    return (
      <div className="loading-indicator d-flex align-items-center justify-content-center">
        <img
          src="/images/loading.webp"
          alt="Loading..."
        />
      </div>
    );
  }


  const newStarredDataElements = starredData.map((item, index) => {
    const { image, name, summary, id } = item;

    const parser = new DOMParser();
    const doc = parser.parseFromString(summary, "text/html");
    const summaryInnerText = doc.body.textContent;

    return (
      <div
        key={id}
        className="resultBox d-flex flex-column align-items-center justify-content-center"
      >
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
  });

  return (
    <>
      {starredData.length === 0 ? (
        <h4 className="mt-4">No starred shows</h4>
      ) : (
        newStarredDataElements
      )}
    </>
  );
};
