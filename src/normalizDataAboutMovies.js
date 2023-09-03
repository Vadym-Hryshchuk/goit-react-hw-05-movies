import defaultPoster from './defaultData/defaultPosterMovie.webp';
import poster from './defaultData/defaultPosterMovie.webp';
import avatar from './defaultData/avatar.jpg';

export const normalizedDataAboutMovies = moviesArrey =>
  moviesArrey.map(({ id, name, poster_path, title }) => ({
    id,
    title: title ?? name,
    posterPath: poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : poster,
  }));

export const normalizedMovieDetails = ({
  id,
  backdrop_path,
  genres,
  name,
  overview,
  popularity,
  relase_date,
  title,
  vote_average,
}) => ({
  id,
  backdropPath: backdrop_path
    ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
    : defaultPoster,
  genres: genres.map(genre => genre.name).join(', '),
  overview,
  popularity,
  relaseDate: relase_date,
  title: title ?? name,
  voteAverage: vote_average,
});

export const normalizedDataAboutCast = castArrey =>
  castArrey.map(({ id, name, profile_path, character }) => ({
    id,
    name,
    profilePath: profile_path
      ? `https://image.tmdb.org/t/p/w500${profile_path}`
      : avatar,
    character,
  }));
