import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Grid from '@mui/material/Grid2'
import { useNavigate } from 'react-router'
import { Typography, Container } from "@mui/material"
import { MovieShorten } from "../atomics/store"
import MovieCard from '../components/MovieCard'
import { RootStoreContext } from '../hooks/RootStoreContext'

const Featured = observer(() => {
  const { moviesStore, featuredStore: store } = useContext(RootStoreContext)
    const navigate = useNavigate()
    const onMovieSelect = (movie: MovieShorten) => {
      moviesStore.getMovieById(movie.imdbID)
      navigate(`/movie/${movie.imdbID}`)
    }
    return (
        <Container maxWidth="xl">
          <Typography variant="h3">Избранные</Typography>
          {!store.movies.length && <div>Список пуст.</div>}
          {store.movies.length && (
            <Grid container spacing={2}>
              {store.movies.map(movie => (
                <Grid key={movie.imdbID}>
                  <MovieCard movie={movie} onMovieSelect={onMovieSelect} toggleFeatured={() => store.toggleFeatured(movie)} />
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
    )
})

export default Featured