import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, auto));
  grid-gap: 16px;
  list-style: none;
  padding: 0;
  li {
    &:hover {
      scale: 1.1;
      transition: all 0.5s ease-out;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 380px;
  }
  p {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
`;
