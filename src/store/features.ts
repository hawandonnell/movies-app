import { makeAutoObservable } from "mobx";
import { FeaturedMoviesStore, MovieShorten } from "../atomics/store";

class Featured implements FeaturedMoviesStore {
    movies: MovieShorten[] = []
    constructor() {
        makeAutoObservable(this)
    }
    isInFeatured(imdbID: string) {
        return this.movies.some(movie => movie.imdbID === imdbID)
    }
    toggleFeatured(movie: MovieShorten) {
        const movieIndex = this.movies.findIndex((m) => m.imdbID === movie.imdbID)
        if (movieIndex !== -1) {
            this.movies.splice(movieIndex, 1)
        } else {
            this.movies.push(movie)
        }
    }
}

export default Featured