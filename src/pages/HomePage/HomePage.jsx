import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";

import MovieList from "../MovieList/MovieList";
import { getMovies } from "../../api/movies";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;
      setLoading(true);

      try {
        const data = await getMovies({ limit: 10 });
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, page]);

  return (
    <div>
      <MovieList />
    </div>
  );
};

export default HomePage;
