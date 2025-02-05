import Movies from "./movies"
import Featured from "./features"

class RootStore {
    moviesStore: Movies
    featuredStore: Featured
    
    constructor() {
        this.moviesStore = new Movies()
        this.featuredStore = new Featured()
    }
}

export default RootStore