import styled from 'styled-components';
export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, auto));
  grid-gap: 16px;
  list-style: none;
  padding: 0;

  img {
    display: block;
    width: 100%;
    height: 380px;
  }
  p {
    margin: 0;
    padding: 5px;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.5);
  }
`;
