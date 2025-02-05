import { makeAutoObservable, runInAction } from "mobx";
import { MoviesStore, SearchResponse } from "../atomics/store";

class Movies implements MoviesStore {
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
    searchResult = {
        Response: SearchResponse.True,
        totalResults: '',
        Search: [],
    }
    state: 'pending' | 'error' | 'fulfilled' = 'pending'
    search = 'Matrix'

    constructor() {
        makeAutoObservable(this)
        if (!this.searchResult.Search.length) {
            this.searchMovies()
        }
    }

    async fetchMovies() {
        this.state = 'pending'
        try {
            const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=51c54612')
            const data = await response.json()
            runInAction(() => {
                this.movies = data
                this.state = 'fulfilled'
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
        this.searchResult = {
            Response: SearchResponse.False,
            totalResults: '',
            Search: []
        }
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=51c54612&s=${this.search}`)
            const data = await response.json()
            runInAction(() => {
                this.searchResult = data
                this.state = 'fulfilled'
            })
        } catch (err) {
            runInAction(() => {
                this.state = 'error'
                console.error(err)
            })
        }
    }

    async getMovieById(id: string) {
        this.state = 'pending'
        try {
            const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=51c54612`)
            const data = await response.json()
            runInAction(() => {
                this.movies = data
                this.state = 'fulfilled'
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