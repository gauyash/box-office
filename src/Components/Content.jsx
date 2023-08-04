import React from "react";

export default function Content({ data }) {
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="d-flex gap-4 flex-wrap">
        {data.map((item) => {
          return (
            <img
              loading="lazy"
              key={item.id}
              title={item.description}
              className="img"
              src={item.urls.small_s3}
              alt={item.alt_description}
            />
          );
        })}
      </div>
    </div>
  );
}
