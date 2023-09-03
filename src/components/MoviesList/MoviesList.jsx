import { Link, useLocation } from 'react-router-dom';
import { MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <MoviesListStyled>
      {movies.map(({ id, posterPath, title }) => {
        return (
          <li key={id}>
            {
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={posterPath} alt={title} />
                <p>{title}</p>
              </Link>
            }
          </li>
        );
      })}
    </MoviesListStyled>
  );
};
