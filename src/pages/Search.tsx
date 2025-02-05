import { Container, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2'
import { observer } from "mobx-react-lite"
import { useMemo, useEffect } from "react"
import { useNavigate } from "react-router"
import { debounce } from "lodash"
import { MoviesStore, MovieShorten, SearchResponse } from "../atomics/store"
import MovieCard from "../components/MovieCard"

const Search = observer(({ store }: { store: MoviesStore }) => {
  const navigate = useNavigate()
  const debouncedSearch = useMemo(() => {
      return debounce(() => {
        store.searchMovies()
      }, 300)
  }, [store])

  const onMovieSelect = (movie: MovieShorten) => {
    store.getMovieById(movie.imdbID)
    navigate('/movie')
  }

  useEffect(() => {
    if (store.search) debouncedSearch()
    return () => debouncedSearch.cancel()
  }, [debouncedSearch, store.search])

  return (
    <Container maxWidth="xl">
      <Typography variant="h3">Поиск</Typography>
      <TextField id="movie-search" label="Введите название фильма" variant="outlined" value={store.search} onChange={(e) => store.search = e.target.value} sx={{ width: '100%', margin: '1rem 0' }}/>
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

export default Search