import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzczZjMxYzUxOWE4NWRlZWZjZjk4NDRiYTkyODY0NCIsIm5iZiI6MTczMjUzOTAyOS4zNTU0NjA2LCJzdWIiOiI2NzEyMTNkYjA5N2MzZDc3NjBmODkyMDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3SJOxqJauN7mqB54DDC3-atC40laFRijqkFEw5U9oOo";

const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    include_adult: false,
    language: "en-US",
  },
});

export const getTrendingMovies = async (time_window = "week") => {
  const { data } = await moviesInstance.get(`trending/movie/${time_window}`, {
    params: {
      page: 1,
    },
  });
  return data;
};

export const searchMovies = async (query) => {
  const { data } = await moviesInstance.get("/search/movie", {
    params: {
      query,
      page: 1,
    },
  });
  return data;
};

export const getMovieById = async (movie_id) => {
  const { data } = await moviesInstance.get(`/movie/${movie_id}`);
  return data;
};

export const getMovieCredits = async (movie_id) => {
  const { data } = await moviesInstance.get(`/movie/${movie_id}/credits`);
  return data.cast;
};
export const getMovieReviews = async (movie_id) => {
  const { data } = await moviesInstance.get(`/movie/${movie_id}/reviews`);
  return data.results;
};
