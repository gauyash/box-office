import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cast } from "../Components/Shows/Cast";
import { Season } from "../Components/Shows/Season";
import { searchForShows } from "../Api/api";

export const ShowsDetails = () => {
  const [showData, setShowData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const apiData = await searchForShows(
          `/shows/${params.id}?embed[]=seasons&embed[]=cast`
        );
        setShowData(apiData);
        setLoading(false); // Set loading to false when data is fetched successfully
      } catch (error) {
        console.error("Error fetching show data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchShowData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="loading-indicator d-flex align-items-center justify-content-center">
        <img
          src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"
          alt="Loading..."
        />
      </div>
    );
  }

  const {
    image,
    name,
    rating,
    summary,
    genres,
    status,
    premiered,
    network,
    _embedded,
  } = showData;

  const parser = new DOMParser();
  const doc = parser.parseFromString(summary, "text/html");
  const summaryInnerText = doc.body.textContent;
  const genresElement = genres.map((genreItem, genreIndex) => {
    return (
      <span
        key={genreIndex}
        className="text-bg-success mx-1 py-1 px-2 genres rounded-4"
      >
        {genreItem}
      </span>
    );
  });

  return (
    <div className="container-md d-flex flex-column gap-5">
      <Link className="back-button" to="/box-office/">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </Link>
      <div className="d-flex align-items-center overviewContainer">
        <img src={image ? image.medium : "/images/icon-image-not-found-free-vector.jpg"} alt="" className="poster rounded-5" />
        <div className="overviewText pt-5 d-flex flex-column gap-3">
          <h1 className="title d-flex align-items-center gap-3">
            {name} <span>|</span>
            <span className="rating">
              <ion-icon name="star"></ion-icon> {rating.average}
            </span>
          </h1>
          <p>{summaryInnerText}</p>
          <h6>
            Genres:
            {genresElement}
          </h6>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        <h3>Details</h3>
        <div>
          <h6>
            Status:<span className="">{status}</span>
          </h6>
          <h6>
            Premiered:
            <span className="">{`${premiered} ${
              network ? `on ${network.name}` : ""
            }`}</span>
          </h6>
        </div>
      </div>

      <div className="d-flex flex-column gap-3">
        <h3>Season</h3>
        <div>
          <h6>
            Season in total: <span>{_embedded.seasons.length}</span>
          </h6>
          <h6>
            Episode in total:{" "}
            <span>
              {_embedded.seasons.reduce(
                (acc, value) => acc + value.episodeOrder,
                0
              )}
            </span>
          </h6>
        </div>
      </div>
      <div className="season-info d-flex gap-4 flex-column">
        <Season seasonData={_embedded.seasons} />
      </div>

      <div className="d-flex flex-column gap-4">
        <h3>Cast</h3>
        <div className="d-flex cast-row gap-3">
          <Cast castData={_embedded.cast} />
        </div>
      </div>
    </div>
  );
};
