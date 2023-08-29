import { Link } from 'react-router-dom';
import { MoviesListStyled } from './MoviesList.styled';

export const MoviesList = ({ movies }) => (
  <MoviesListStyled>
    {movies.map(({ id, posterPath, title }) => {
      return (
        <li key={id}>
          {
            <Link to={`/movies/${id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${posterPath}`}
                alt={title}
              />
              <p>{title}</p>
            </Link>
          }
        </li>
      );
    })}
  </MoviesListStyled>
);
