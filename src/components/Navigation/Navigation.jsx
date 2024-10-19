import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const buildCssClasses = (
  { isActive } // isActive - це внутрішній функціонал бібліотеки React Router.
) => clsx(styles.link, isActive && styles.active);

const Navigation = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <NavLink className={buildCssClasses} to="/">
          Home
        </NavLink>
        <NavLink className={buildCssClasses} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
