import HomePage from 'page/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<div>Filmy</div>} />
        <Route path="movies/:movieId" element={<div>Film po Id</div>} />
      </Route>
    </Routes>
  );
};
