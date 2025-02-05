import { makeAutoObservable } from "mobx";
import { FeaturedMoviesStore } from "../atomics/store";

class Featured implements FeaturedMoviesStore {
    movies = []
    constructor() {
        makeAutoObservable(this)
    }
}

export default Featured