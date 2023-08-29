import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'api';

import { MoviesList } from 'components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  const normalizedDataAboutMovies = moviesArrey =>
    moviesArrey.map(({ id, name, poster_path, title }) => ({
      id,
      title: title ?? name,
      posterPath: poster_path,
    }));

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
//https://image.tmdb.org/t/p/original/o86DbpburjxrqAzEDhXZcyE8pDb.png
