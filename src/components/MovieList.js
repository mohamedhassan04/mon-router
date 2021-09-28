import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Filter from "./Filter";

function MovieList({ movies }) {
  const [text, settext] = useState("");
  const [rate, setrate] = useState("");
  const filterText = (txt) => {
    settext(txt);
  };
  const filterRate = (rt) => {
    setrate(rt);
  };
  return (
    <>
      <Filter filterText={filterText} filterRate={filterRate} />
      <div className="el3ouji">
        {movies
          .filter(
            (movie) =>
              movie.name.toLowerCase().includes(text.toLowerCase()) &&
              movie.rating >= rate
          )
          .map((movie) => <MovieCard movie={movie} />)
          .reverse()}
      </div>
    </>
  );
}

export default MovieList;
