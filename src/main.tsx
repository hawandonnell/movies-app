import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Route, Routes } from 'react-router'
import App from './App.tsx'
import Featured from './pages/Featured.tsx'
import Movies from './store/movies.ts'
import FeaturedMoviesStore from './store/features.ts'
import Menu from './components/Menu.tsx'
import Search from './pages/Search.tsx'
import Movie from './pages/Movie.tsx'

const store = new Movies()
const featuredStore = new FeaturedMoviesStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<App store={store} featuredStore={featuredStore} />} />
        <Route path="/featured" element={<Featured moviesStore={store} store={featuredStore} />} />
        <Route path="/search" element={<Search store={store} />} />
        <Route path="/movie" element={<Movie store={store} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
