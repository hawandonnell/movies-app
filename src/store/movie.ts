import { makeAutoObservable } from "mobx";
import { CurrentMovieStore } from "../atomics/store";

class CurrentMovie implements CurrentMovieStore {
    movies = {
        imdbID: '',
        imdbRating: '',
        Title: '',
        Rated: '',
        Year: '',
        Director: '',
        Plot: '',
        Poster: ''
    }
    state: "error" | "pending" | "fulfilled" = "pending";

    constructor() {
        makeAutoObservable(this)
    }
}

export default CurrentMovie