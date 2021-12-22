import React from "react";

const MovieList = ({ movies, favoriteComponent, handleFavoriteClick }) => {
  // different way of importing components as a prop
  const FavoriteComponent = favoriteComponent;
  //if I wrapped it in a div instead of fragment nowrap would not work correctly
  return (
    <>
      {movies.map((movie, index) => (
        <div className="image-container col-3 d-flex justify-content-start ">
          <img src={movie.Poster} alt="movie" key={index} />

          <div
            onClick={() => handleFavoriteClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
