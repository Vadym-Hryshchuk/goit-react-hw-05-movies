import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMoviesForQuery } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { normalizedDataAboutMovies } from 'normalizDataAboutMovies';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const searchQuery = searchParams.get('query');

  const handleSubmit = evt => {
    const notify = () => toast.error('Hey! Enter a some query!');
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    query.trim() === '' ? notify() : setSearchParams({ query });

    evt.target.reset();
  };
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getedMovies = async () => {
      const fetchedMoviesArrey = await fetchMoviesForQuery(searchQuery);
      setMovies(normalizedDataAboutMovies(fetchedMoviesArrey));
    };
    getedMovies();
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>

        <input
          type="text"
          autoComplete="off"
          placeholder="Search movies"
          name="query"
        />
      </form>
      <MoviesList movies={movies} />
      <Toaster />
    </>
  );
};
export default Movies;
