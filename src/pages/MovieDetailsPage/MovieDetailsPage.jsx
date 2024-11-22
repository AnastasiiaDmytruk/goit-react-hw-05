import styles from "./MovieDetailsPage.module.css";
import { IoIosArrowDropleft } from "react-icons/io";

import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../api/movies";
import { useEffect, useRef, useState } from "react";

import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state ?? "/");

  const defaultImage =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;
      setLoading(true);
      setError(null);
      try {
        const requestData = await getMovieById(movieId);
        setMovie(requestData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.goBack}>
        <Link  to={backLink.current}>GoBack</Link>
      </div>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {movie && (  
        <div>
          <div className={styles.wrapper}>
            <div>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImage
                }
                width={250}
                alt={movie.title || "Movie poster"}
              />
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p> {movie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
          </div>
          <div className={styles.additionalInfoWrapper} >
            <h3>Additional Information</h3>
            <div className={styles.linkContainer}>
            <Link  to={`cast`}
            state={backLink.current}>
              Cast
            </Link>
            <Link state={backLink.current} to={`reviews`}>
              Reviews
            </Link></div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
