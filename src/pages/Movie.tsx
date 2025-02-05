import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from '@mui/material';
import { RootStoreContext } from '../hooks/RootStoreContext';

const Movie = observer(() => {
    const store = useContext(RootStoreContext).moviesStore
    return (
        <Container maxWidth="xl">
            {store.state === 'pending' && <div>Loading...</div>}
            {store.state === 'error' && <div>Error</div>}
            {store.state === 'fulfilled' && (
                <div>{store.movies.Title}</div>
            )}
        </Container>
    )
})

export default Movie