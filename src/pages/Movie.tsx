import { observer } from 'mobx-react-lite';
import { Container } from '@mui/material';
import { CurrentMovieStore } from "../atomics/store";

const Movie = observer(({ store }: { store: CurrentMovieStore }) => {
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