import { MoviesStore, SearchResponse, MovieShorten } from "./atomics/store"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router"
import { Container, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2' 
import MovieCard from "./components/MovieCard"

const App = observer(({ store }: { store: MoviesStore }) => {
  const navigate = useNavigate()

  const onMovieSelect = (movie: MovieShorten) => {
    store.getMovieById(movie.imdbID)
    navigate('/movie')
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h3">Главная</Typography>
      {store.state === 'pending' && <div>Loading...</div>}
      {store.state === 'error' && <div>Error</div>}
      {store.state === 'fulfilled' && store.searchResult.Response === SearchResponse.True && store.searchResult.Search.length && (
        <Grid container spacing={2}>
          {store.searchResult.Search.map(movie => (
            <Grid key={movie.imdbID}>
              <MovieCard movie={movie} onMovieSelect={onMovieSelect} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
})

export default App
