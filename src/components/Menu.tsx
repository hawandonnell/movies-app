import Button from '@mui/material/Button'
import { Container } from '@mui/material'
import { NavLink } from 'react-router'

export default function Menu() {
    return (
        <Container maxWidth="xl">
            <NavLink to="/" end>
                {({ isActive }) => (
                    <Button id="basic-button" disabled={isActive}>Главная</Button>
                )}
            </NavLink>
            <NavLink to="/featured" end>
                {({ isActive }) => (
                    <Button id="basic-button" disabled={isActive}>Избранное</Button>
                )}
            </NavLink>
            <NavLink to="/search" end>
                {({ isActive }) => (
                    <Button id="basic-button" disabled={isActive}>Поиск</Button> 
                )}
            </NavLink>
        </Container>
    )
}