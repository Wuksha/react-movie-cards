import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const getMovies = (movies, updateMovies) => {
    return (
        <div className="card-deck">
            {
                movies.map(movie => <MovieCard updateMovies={updateMovies} key={movie.id} movie={movie} />)
            }
        </div>
    );
};

const MovieList = (props) => (
    <div>
        {getMovies(props.movies, props.updateMovies)}
    </div>
);

MovieList.defaultProps = {
    movies: []
};

MovieList.propTypes = {
    movies: PropTypes.array,
    updateMovies: PropTypes.func
};

export default MovieList;