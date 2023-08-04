import React, { useReducer } from "react";
import { ResultShows } from "./ResultShows";
import { ResultActor } from "./ResultActor";

export const ResultContainer = ({ star, handleStar, data, formData }) => {

  const resultBoxElements = data.map((item, index) => {
    // Returning items when selected shows
    if (formData.options === "shows" && item.show) {
      return (
        <ResultShows
          star={star}
          handleStar={handleStar}
          key={item.show.id}
          item={item}
        />
      );
    }

    // Returning items when selected actor
    else if (formData.options === "people" && item.person) {
      return <ResultActor key={item.person.id} item={item} />;
    }

    // Handle other cases where data doesn't match expected structure
    else {
      return null; // or show an error message or handle the case differently
    }
  });

  return (
    <div className="resultContainer d-flex py-5 gap-4 align-items-baseline">
      {resultBoxElements}
    </div>
  );
};
