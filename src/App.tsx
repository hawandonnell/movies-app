import { MoviesStore } from "./atomics/store"
import { observer } from "mobx-react-lite"

const App = observer(({ store }: { store: MoviesStore }) => {
  return (
    <>
      {store.state === 'pending' && <div>Loading...</div>}
      {store.state === 'error' && <div>Error</div>}
      {store.state === 'fulfilled' && (
        <div>
          <input type="text" value={store.search} onChange={(e) => store.search = e.target.value} />
          <button onClick={() => store.searchMovies()}>Search</button>
          <h1>{store.movies.Title}</h1>
          <h2>{store.movies.Year}</h2>
          <h3>{store.movies.Director}</h3>
          <p>{store.movies.Plot}</p>
        </div>
      )}
    </>
  )
})

export default App
