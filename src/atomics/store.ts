// Movie full info
export interface Movies {
    imdbID: string,
    imdbRating: string,
    Title: string,
    Rated: string,
    Year: string,
    Director: string,
    Plot: string,
    Poster: string,
}

export enum SearchResponse {
    True = 'True',
    False = 'False'
}

export type MovieShorten = Omit<Movies, 'Director' | 'Plot' | 'Rated' | 'imdbRating'>

export interface SearchResult {
    Search: Array<MovieShorten>,
    Response: SearchResponse,
    totalResults: string
}

export interface MoviesStore {
    movies: Movies,
    state: 'error' | 'pending' | 'fulfilled',
    search: string,
    searchResult: SearchResult,
    searchMovies(): void,
    getMovieById(id: string): void
}

export type CurrentMovieStore = Omit<MoviesStore, 'searchMovies' | 'search' | 'searchResult' | 'searchMovies' | 'getMovieById'>

export interface FeaturedMoviesStore {
    movies: Array<MovieShorten>
}