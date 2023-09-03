import HomePage from 'page/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import { MovieDetails } from '../page/MovieDetails';
import Movies from 'page/Movies';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
