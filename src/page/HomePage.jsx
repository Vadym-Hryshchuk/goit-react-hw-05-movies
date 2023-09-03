import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { normalizedDataAboutMovies } from 'normalizDataAboutMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getedMovies = async () => {
      const fetchedMovies = await fetchTrendingMovies();
      setMovies(normalizedDataAboutMovies(fetchedMovies));
    };

    getedMovies();
  }, []);
  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
