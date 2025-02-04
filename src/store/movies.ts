import { makeAutoObservable, runInAction } from "mobx";
import { MoviesStore } from "../atomics/store";

class Movies implements MoviesStore {
    movies = {
        imdbRating: '',
        Title: '',
        Rated: '',
        Year: '',
        Director: '',
        Plot: ''
    }
    state: 'pending' | 'error' | 'fulfilled' = 'pending'
    search = ''

    constructor() {
        makeAutoObservable(this)
        this.fetchMovies()
    }

    async fetchMovies() {
        this.state = 'pending'
        try {
            const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=51c54612')
            const data = await response.json()
            runInAction(() => {
                this.movies = data
                this.state = 'fulfilled'
                console.log('check data', this.movies, this.state)
            })
        } catch (err) {
            runInAction(() => {
                this.state = 'error'
                console.error(err)
            })
        }
    }

    async searchMovies() {
        this.state = 'pending'
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=51c54612&t=${this.search}`)
            const data = await response.json()
            runInAction(() => {
                this.movies = data
                this.state = 'fulfilled'
                console.log('check data', this.movies, this.state)
            })
        } catch (err) {
            runInAction(() => {
                this.state = 'error'
                console.error(err)
            })
        }
    }
}

export default Movies