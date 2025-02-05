import { Card, CardMedia, CardContent, Typography, CardActions, Button, CardActionArea } from '@mui/material'
import { MovieShorten } from '../atomics/store'

export default function MovieCard({ movie, onMovieSelect }: { movie: MovieShorten, onMovieSelect: (movie: MovieShorten) => void }) {
    return (
        <Card sx={{ width: 345 }}>
            <CardActionArea onClick={() => onMovieSelect(movie)}>
                <CardMedia sx={{ height: 600 }} image={movie.Poster} title={movie.Title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.Title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button>Добавить в избранное</Button>
            </CardActions>
        </Card>
    )
}