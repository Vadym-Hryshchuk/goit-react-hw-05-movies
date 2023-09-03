import { NavLinkList, NavLinkStyled } from './MovieDetailsLink.styled';

export const MovieDetailsLink = ({ state }) => {
  return (
    <NavLinkList>
      <li>
        <NavLinkStyled to={`cast`} state={state}>
          Cast
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to={`reviews`} state={state}>
          Reviews
        </NavLinkStyled>
      </li>
    </NavLinkList>
  );
};
