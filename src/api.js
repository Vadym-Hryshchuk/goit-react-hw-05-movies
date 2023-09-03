import axios from 'axios';

const API_KEY = 'ecfc3d2c9f85b1e998937003bb3b10c0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/all/day?language=en-US&api_key=${API_KEY}`
  );
  return data.results;
};
export const fetchMoviesForQuery = async (query = '', page = 1) => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=${API_KEY}`
  );
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};
export const fetchMovieCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`
  );
  return data;
};
export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return data;
};
