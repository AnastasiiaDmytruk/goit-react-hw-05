import styles from "./MovieDetailsPage.module.css";
import { IoIosArrowDropleft } from "react-icons/io";

import { NavLink, useParams } from "react-router-dom";
import { getMovieById } from "../../api/movies";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log({ movieId });
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //   const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;
      setLoading(true);
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <NavLink className={styles.link} to="/">
        <IoIosArrowDropleft />
        Go Back
      </NavLink>
    </div>
  );
};
export default MovieDetailsPage;
