import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkList = styled.ul`
  display: inline-flex;
  margin: 0 0 15px;
  padding: 0;
  list-style: none;

  li {
    &:not(:last-child) {
      margin-left: 50px;
      margin-right: 10px;
    }
  }
`;
export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  width: 70px;
  margin: 0;
  padding: 0 5px;
  text-decoration: none;
  border: 1px solid rgba(0, 87, 184, 0.7);
  border-radius: 5px;
  text-align: center;
  color: currentColor;

  &.active {
    background-color: rgba(0, 87, 184, 0.7);
    border: 2px solid rgba(255, 215, 0, 0.7);
  }
  &:hover {
    background-color: rgba(255, 215, 0, 0.7);
    border: 2px solid rgba(0, 87, 184, 0.7);
  }
`;
