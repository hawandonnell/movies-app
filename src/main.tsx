import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Route, Routes } from 'react-router'
import App from './App.tsx'
import Featured from './pages/Featured.tsx'
import { ReactNode } from 'react';
import Menu from './components/Menu.tsx'
import Search from './pages/Search.tsx'
import Movie from './pages/Movie.tsx'
import { RootStoreContext } from './hooks/RootStoreContext.ts'


export default function RootStoreProvider ({ children }: { children: ReactNode }): JSX.Element {
    const rootStore = useContext(RootStoreContext)
    return (
        <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
    )
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootStoreProvider>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </RootStoreProvider>
  </StrictMode>,
)
