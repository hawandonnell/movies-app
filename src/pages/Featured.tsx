import Grid from '@mui/material/Grid2'
import { useNavigate } from 'react-router'
import { Typography, Container } from "@mui/material"
import { FeaturedMoviesStore, MovieShorten, MoviesStore } from "../atomics/store"
import MovieCard from '../components/MovieCard'

export default function Featured({ store, moviesStore }: { store: FeaturedMoviesStore, moviesStore: MoviesStore }) {
    const navigate = useNavigate()
    const toggleFeatured = (movie: MovieShorten) => {
      const movieIndex = store.movies.findIndex((m) => m.imdbID === movie.imdbID)
      if (movieIndex !== -1) {
        store.movies.splice(movieIndex, 1)
      }
    }
    const onMovieSelect = (movie: MovieShorten) => {
      moviesStore.getMovieById(movie.imdbID)
      navigate('/movie')
    }
    return (
        <Container maxWidth="xl">
          <Typography variant="h3">Избранные</Typography>
          {!store.movies.length && <div>Список пуст.</div>}
          {store.movies.length && (
            <Grid container spacing={2}>
              {store.movies.map(movie => (
                <Grid key={movie.imdbID}>
                  <MovieCard movie={movie} onMovieSelect={onMovieSelect} toggleFeatured={toggleFeatured} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
    )
}