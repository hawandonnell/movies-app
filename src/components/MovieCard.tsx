import { useContext } from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from '@mui/material'
import { MovieShorten } from '../atomics/store'
import { RootStoreContext } from '../hooks/RootStoreContext'
import { observer } from 'mobx-react-lite'

const MovieCard = observer(({ movie, onMovieSelect, toggleFeatured }: { movie: MovieShorten, onMovieSelect: (movie: MovieShorten) => void, toggleFeatured: (movie: MovieShorten) => void | undefined }) => {
    const { featuredStore } = useContext(RootStoreContext)
    return (
        <Card sx={{ width: 345 }}>
            <CardActionArea onClick={() => onMovieSelect(movie)}>
                <CardMedia sx={{ height: 600 }} image={movie.Poster} title={movie.Title} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {movie.Title}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        {movie.Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => toggleFeatured(movie)}>{ featuredStore.isInFeatured(movie.imdbID) ? 'Удалить из избранного' : 'Добавить в избранное' }</Button>
            </CardActions>
        </Card>
    )
})

export default MovieCard