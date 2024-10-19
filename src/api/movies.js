import axios from "axios";

const moviesInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzczZjMxYzUxOWE4NWRlZWZjZjk4NDRiYTkyODY0NCIsIm5iZiI6MTcyOTM2MTI2My41NDYyOTEsInN1YiI6IjY3MTIxM2RiMDk3YzNkNzc2MGY4OTIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jhv-3-pGoLRBR2po7y-F9le-qmW9UrQ0D4HuhlcRUpM",
  },
  params: {
    include_adult: false,
    language: "en - US",
  },
});

export const getMovies = async (params) => {
  const { data } = await moviesInstance.get("/search/movie", { params });
  return data;
};

export const getMovieById = async (id) => {
  const { data } = await moviesInstance.get(`/movie/${id}`);
  return data;
};
