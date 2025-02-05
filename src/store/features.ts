import { makeAutoObservable } from "mobx";

class Featured {
    movies = []
    constructor() {
        makeAutoObservable(this)
    }
}

export default Featured