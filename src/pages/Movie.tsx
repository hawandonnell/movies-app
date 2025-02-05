import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import { CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { RootStoreContext } from '../hooks/RootStoreContext';

const Movie = observer(() => {
    const store = useContext(RootStoreContext).moviesStore
    const params = useParams() as { imdbID: string }

    useEffect(() => {
        if (!store.movies.imdbID) {
            store.getMovieById(params.imdbID)
        }
    }, [params.imdbID, store])
    return (
        <Container maxWidth="xl">
            {store.state === 'pending' && <div>Loading...</div>}
            {store.state === 'error' && <div>Error</div>}
            {store.state === 'fulfilled' && (
                <Grid container spacing={6}>
                    <Grid size={4}>
                        <CardMedia sx={{ width: '100%', height: 600 }} image={store.movies.Poster} title={store.movies.Title} />
                    </Grid>
                    <Grid size={8} container direction="column">
                        <Typography variant="h4">{store.movies.Title}</Typography>
                        <Grid container spacing={2} sx={{ fontWeight: 'bold' }}>
                            <Grid><Typography>{store.movies.Year}</Typography></Grid>
                            <Grid><Typography sx={{ fontWeight: 'bold' }} color={Number(store.movies.imdbRating) >= 7 ? 'success' : 'warning'}>{store.movies.imdbRating}</Typography></Grid>
                            <Grid><Typography color="textPrimary">{store.movies.Director}</Typography></Grid>
                            <Grid><Typography sx={{ fontWeight: 'bold' }} color={store.movies.Rated === 'R' ? 'error' : ''}>{store.movies.Rated}</Typography></Grid>
                        </Grid>
                        <Typography variant="h6">{store.movies.Plot}</Typography>
                    </Grid>
                </Grid>
            )}
        </Container>
    )
})

export default Movie