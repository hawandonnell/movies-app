import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Route, Routes } from 'react-router'
import App from './App.tsx'
import Featured from './pages/Featured.tsx'
import Movies from './store/movies.ts'
import Menu from './components/Menu.tsx'
import Search from './pages/Search.tsx'
import Movie from './pages/Movie.tsx'

const store = new Movies()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route index path="/" element={<App store={store} />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/search" element={<Search store={store} />} />
        <Route path="/movie" element={<Movie store={store} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
