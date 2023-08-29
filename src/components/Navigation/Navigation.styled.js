import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
`;
export const Header = styled.header`
  margin: 0 0 15px;
  padding: 15px;
  background: linear-gradient(
    8deg,
    rgba(255, 215, 0, 0.7) 30%,
    rgba(0, 87, 184, 0.7) 52%
  );
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active {
    color: red;
  }
  &:hover {
    text-shadow: 1px 1px 2px black;
  }
`;
