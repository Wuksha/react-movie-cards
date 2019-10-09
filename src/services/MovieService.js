import movies from './movies.json';
export default class MovieService {
    static getMovies() {
        localStorage.setItem('movies', JSON.stringify(movies));
        return movies ? movies : [];
    }

    static addMovie(title, subtitle, description, year, imageUrl) {
        const localMovies = JSON.parse(localStorage.getItem('movies'));

        const movie = {
            id: (movies.length + 1) * 100,
            title,
            subtitle,
            description,
            year,
            imageUrl,
            rating: 0
        };
        
        localMovies.push(movie);

        localStorage.setItem('movies', JSON.stringify(localMovies));
    }

    static deleteMovie(id) {
        let allMovies = JSON.parse(localStorage.getItem('movies'));

        allMovies = allMovies.filter(movie => movie.id !== id);

        localStorage.setItem('movies', JSON.stringify(allMovies));
    }
}