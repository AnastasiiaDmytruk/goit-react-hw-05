import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css"

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return(
          <li className={styles.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location }>
              {movie.title}
            </Link>
          </li>
        );
        })}
      </ul>
    </div>

  );
};

export default MovieList;
