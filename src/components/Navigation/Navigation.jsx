import { Outlet } from 'react-router-dom';
import { Container, Header, NavLinkStyled } from './Navigation.styled';

const Navigation = () => (
  <Container>
    <Header>
      <nav>
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/movies">Movies</NavLinkStyled>
      </nav>
    </Header>
    <Outlet />
  </Container>
);

export default Navigation;
