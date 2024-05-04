import React from "react";
import "../Style/Filter.css";

const genres = [
  "Drama",
  "Crime",
  "Action",
  "Fantasy",
  "Western",
  "Science Fiction",
  "Thriller",
  "War",
  "Animation",
];

const Filter = ({ setSelectedGenre }) => {
  const handleBtnClick = (genre) => {
    setSelectedGenre(genre);
    console.log("Filtering by", genre);
  };

  return (
    <div className="filter-container">
      <h2>Filter by Genre</h2>
      <div className="btns-container">
        {genres.map((genre) => {
          return (
            <button
              key={genre}
              className="filter-btn"
              onClick={() => handleBtnClick(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
