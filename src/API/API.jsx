import axios from "axios";

// const API_KEY = "9bd9d6fdfd477ad4ce71dca61f64f2d0"; maniki
const API_KEY = 'e6bf0915b364df427bb83341ef7c07ac';

const baseUrl = "https://api.themoviedb.org/3/";
export const baseImgUrl = "https://image.tmdb.org/t/p/w500/";

export const apis = {
  getPopularMovies: (pages) =>
    axios.get(baseUrl + "movie/popular?", {
      params: {
        api_key: API_KEY,
        page:pages
      },
    }),

  getLatestMovies: (pages) =>
    axios.get(baseUrl + "movie/upcoming?", {
      params: {
        api_key: API_KEY,
        page:pages
      },
    }),
  getTopMovies: (pages) =>
    axios.get(baseUrl + "movie/top_rated?", {
      params: {
        api_key: API_KEY,
        page:pages
      },
    }),
  getMovies: (id) =>
    axios.get(baseUrl + "/movie/" + id, {
      params: {
        api_key: API_KEY,
      },
    }),

  getMovieCredits: (id) =>
    axios.get(baseUrl + `/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    }),
  getMovieCreditsFilm: (id) =>
    axios.get(baseUrl + `/movie/${id}/similar`, {
      params: {
        api_key: API_KEY,
      },
    }),
  getMoviePeople: (id) =>
    axios.get(baseUrl + `/person/${id}`, {
      params: {
        api_key: API_KEY,
      },
    }),
  getMoviePeopleFilm: (id) =>
    axios.get(baseUrl + `/person/${id}/movie_credits`, {
      params: {
        api_key: API_KEY,
      },
    }),
  getMovieVidioFilm: (id) =>
    axios.get(baseUrl + `/movie/${id}/videos`, {
      params: {
        api_key: API_KEY,
      },
    }),
  getMovieSearch: (searchQuery) =>
    axios.get(baseUrl + `/search/movie?query=` + searchQuery, {
      params: {
        api_key: API_KEY,
      },
    }),
};
