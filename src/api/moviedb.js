import axios from "axios";

// endpoint

const API_KEY = "97d39b50c99a2fd2db9f2ed346557b45";
const BASE_URL = "https://api.themoviedb.org/3";

const trending = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const topRated = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
const upcoming = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const popular = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

const movieDetail = (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
const movieCast = (id) => `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
const movieSimilar = (id) =>
  `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`;
const searchMovies  = `${BASE_URL}/search/movie?api_key=${API_KEY}`;

const apiCall = async (endpoint, params) => {
  const option = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  try {
    const response = await axios.request(option);
    return response.data;
  } catch (error) {
    console.log("error:", error);
    return {};
  }
};

export const fetchTrending = () => {
  return apiCall(trending);
};

export const fetchTopRated = () => {
  return apiCall(topRated);
};

export const fetchUpcoming = () => {
  return apiCall(upcoming);
};

export const fetchPopular = () => {
  return apiCall(popular);
};

export const fetchMovieDetail = (id) => {
  return apiCall(movieDetail(id));
};

export const fetchMovieCast = (id) => {
  return apiCall(movieCast(id));
};

export const fetchMovieSimilar = (id) => {
  return apiCall(movieSimilar(id));
};

export const fetchSearchMovies = (params) => {
  return apiCall(searchMovies, params);
}

export const getImage = (path) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : fallBacKImage;
export const getImage342 = (path) =>
  path ? `https://image.tmdb.org/t/p/w342${path}` : fallBacKImage;
export const getAvatar = (path) =>
  path ? `https://image.tmdb.org/t/p/w185${path}` : fallBacKCastImage;
export const getOriginal = (path) => `https://image.tmdb.org/t/p/720${path}`;
export const fallBacKCastImage =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
export const fallBacKImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
