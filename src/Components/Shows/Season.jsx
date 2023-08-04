import React from 'react'

export const Season = ({seasonData}) => {
    const seasonsElements =seasonData.map((seasonsItem, seasonsIndex) => {
        const { id, number, episodeOrder, premiereDate, endDate } = seasonsItem;
        return (
          <div key={id} className="d-flex align-items-center">
            <div className="season-details">
              <h6>{`Season ${number}`}</h6>
              <h6>{`Episode ${episodeOrder}`}</h6>
            </div>
            <span className="display-4 mark-custom">|</span>
            <div className="airing-details">
              <h6>
                Aired: <span>{`${premiereDate} to ${endDate}`}</span>
              </h6>
            </div>
          </div>
        );
      });
  return (
    <>
        {seasonsElements}
    </>
  )
}
