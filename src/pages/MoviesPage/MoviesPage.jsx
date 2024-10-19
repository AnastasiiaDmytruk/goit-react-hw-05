import styles from "./MoviesPage.module.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

const MoviesPage = () => {
  return (
    <div>
      <NavLink className={styles.link} to="/">
        <IoIosArrowDropleft />
        Go Back
      </NavLink>
      <MovieDetailsPage />
    </div>
  );
};

export default MoviesPage;
