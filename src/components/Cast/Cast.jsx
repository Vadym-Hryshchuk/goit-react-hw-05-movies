import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';
import { fetchMovieCredits } from 'api';
import { normalizedDataAboutCast } from 'normalizDataAboutMovies';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getedCredits = async () => {
      const { cast } = await fetchMovieCredits(movieId);
      setCast(normalizedDataAboutCast(cast));
    };

    getedCredits();
  }, [movieId]);
  return (
    <CastList>
      {cast.map(({ id, profilePath, name, character }) => (
        <li key={id}>
          <div>
            <img src={profilePath} alt={name} />
            <p>{name}</p>
            <p>Role: {character}</p>
          </div>
        </li>
      ))}
    </CastList>
  );
}
