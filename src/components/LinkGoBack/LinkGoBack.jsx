import goBack from '../../defaultData/GoBack.webp';
import { StyledLink } from './LinkGoBack.styled';

export const LinkGoBack = ({ location }) => {
  return (
    <StyledLink to={location.state?.from}>
      <img src={goBack} alt="go back" />
    </StyledLink>
  );
};
