import React, { useState } from 'react';

function MovieList({ movies }) {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleFilterTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleFilterRatingChange = (e) => {
    setFilterRating(e.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const ratingMatch = movie.rating.toString().includes(filterRating);
    return titleMatch && ratingMatch;
    
  });

  return (
    <div>
      <div className="MovieList">
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={handleFilterTitleChange}
        />
        <input
          type="text"
          placeholder="Filter by rating"
          value={filterRating}
          onChange={handleFilterRatingChange}
        />
      </div>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <img src={movie.posterURL} alt={movie.title} className='poster'/>
            <h3>Rating: {movie.rating}</h3>
            <p>Description: {movie.description}</p>
            <iframe title={'Trailer for ${movie.title}'}
            width="560"
            height='315'
            src={movie.trailerlink}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        
        
        > </iframe>
            
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
