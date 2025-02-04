interface Movies {
    imdbRating: string,
    Title: string,
    Rated: string,
    Year: string,
    Director: string,
    Plot: string
}

export interface MoviesStore {
    movies: Movies,
    state: 'error' | 'pending' | 'fulfilled',
    search: string,
    searchMovies(): void
}

export type MoviesShorten = Omit<Movies, 'Plot' | 'Rated'>

