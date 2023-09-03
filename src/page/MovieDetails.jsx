import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api';
import { normalizedMovieDetails } from 'normalizDataAboutMovies';
import { MovieDetailsLink } from 'components/MovieDetailsLink/MovieDetailsLink';
import { LinkGoBack } from 'components/LinkGoBack/LinkGoBack';
import { MovieDetailsContent } from 'components/MovieDetailsContent/MovieDetailsContent';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    const getedDetails = async () => {
      const fetchedDetails = await fetchMovieDetails(movieId);

      setMovieDetails(normalizedMovieDetails(fetchedDetails));
    };

    getedDetails();
  }, [movieId]);

  return (
    <>
      <LinkGoBack location={locationRef.current}>GoBack</LinkGoBack>
      <MovieDetailsContent content={movieDetails} />
      <MovieDetailsLink />
      <Outlet />
    </>
  );
};
