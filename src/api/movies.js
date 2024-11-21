import axios from "axios";

const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzczZjMxYzUxOWE4NWRlZWZjZjk4NDRiYTkyODY0NCIsIm5iZiI6MTcyOTM2MTI2My41NDYyOTEsInN1YiI6IjY3MTIxM2RiMDk3YzNkNzc2MGY4OTIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jhv-3-pGoLRBR2po7y-F9le-qmW9UrQ0D4HuhlcRUpM",
  },
  params: {
    include_adult: false,
    language: "en-US",
  },
});

export const getTrendingMovies = async  (time_window = 'week') => {
  const { data } = await moviesInstance.get(`trending//movie/${time_window}`, { params:{
    page:1,
  } });
  return data;
};

export const searchMovies = async (query) => {
  const { data } = await moviesInstance.get("/search/movie", {
    params: {
      query,
      page:1,
    },
  });
  return data;
};

export const getMovieById = async (movieId) => {
  const { data } = await moviesInstance.get(`/movie/${movieId}`);
  return data;
};

export const getMovieCredits = async (movieId) => {
  const { data } = await moviesInstance.get(`/movies/${movieId}/credits`);
  return data;
};
export const getMovieReviews = async (movieId) => {
  const { data } = await moviesInstance.get(`/movies/${movieId}/reviews`);
  return data;
};


