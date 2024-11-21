import styles from "./HomePage.module.css";

import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader"
import { getTrendingMovies } from "../../api/movies";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const requestData = await getTrendingMovies();
        setMovies(requestData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Trending Today</h1>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
     {movies!== null && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
