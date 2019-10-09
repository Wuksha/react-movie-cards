import React, { Component } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovie from './AddMovie';

export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: []
        };

        this.updateMovies = this.updateMovies.bind(this);
    }

    componentDidMount() {
        this.setState(() => ({ movies: MovieService.getMovies() }));
    }

    updateMovies() {
        this.setState(() => ({ movies: JSON.parse(localStorage.getItem('movies')) }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">                    
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} />
                        <AddMovie updateMovies={this.updateMovies} />
                    </div>
                </div>
            </div>
        );
    }
}