import { makeAutoObservable } from "mobx";
import { FeaturedMoviesStore, MovieShorten } from "../atomics/store";

class Featured implements FeaturedMoviesStore {
    movies: MovieShorten[] = []
    constructor() {
        makeAutoObservable(this)
    }
}

export default Featured