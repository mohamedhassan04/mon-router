import React from "react";
import ReactStars from "react-rating-stars-component";

function Filter({ filterText, filterRate }) {
  return (
    <>
      <div className="filterbox">
        <div>
          <input
            type="text"
            placeholder="Filter for a movie..."
            className="filterbox"
            onChange={(e) => filterText(e.target.value)}
          />
        </div>
        <div className="eti">
          <ReactStars
            count={5}
            onChange={(newRating) => filterRate(newRating)}
            size={35}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </>
  );
}

export default Filter;
