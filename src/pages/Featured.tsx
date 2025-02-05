import { useContext } from 'react'
import Grid from '@mui/material/Grid2'
import { useNavigate } from 'react-router'
import { Typography, Container } from "@mui/material"
import { MovieShorten } from "../atomics/store"
import MovieCard from '../components/MovieCard'
import { RootStoreContext } from '../hooks/RootStoreContext'

export default function Featured() {
    const { moviesStore, featuredStore: store } = useContext(RootStoreContext)
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