import axios from 'axios';

const API_KEY = 'ecfc3d2c9f85b1e998937003bb3b10c0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `/trending/all/day?language=en-US&api_key=${API_KEY}`
  );
  return data.results;
};

// query - 'https://api.themoviedb.org/3/search/movie?query=car&include_adult=false&language=en-US&page=1&year=2023'
// trend - 'https://api.themoviedb.org/3/trending/all/day?language=en-US'

// 'https://api.themoviedb.org/3/movie/11?api_key=ecfc3d2c9f85b1e998937003bb3b10c0';
//  https://api.themoviedb.org/3/trending/all/day?language=en-US?api_key=ecfc3d2c9f85b1e998937003bb3b10c0
