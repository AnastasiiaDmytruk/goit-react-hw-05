import styles from "./MoviesPage.module.css";
import { NavLink, useSearchParams } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";


import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { searchMovies } from "../../api/movies";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // 2 :зчитуємо значення рядка запиту;  за допомогою метода get дістаємо  з обєкта searchParams (який ми оновили ф-цією  при onSubmit)
  const query = searchParams.get("query");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const asyncWrapper = async () => {
      try {
        setLoading(true);
        setError(null);
        const requestData = await searchMovies(query);
        setMovies(requestData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    asyncWrapper();
  }, [query]);// 3: встановлюємо значення URL в масив залежностей

  // Ця функція буде передана до SearchForm
  // 1 при натисканні на клавішу пошук в формі спрацьовує ф-ція onSubmit яка оновлює  параметри URL
  const onSubmit = (value) => {
    setSearchParams({ query: value }); // Оновлюємо параметри URL
  };

  return (
    <div>
      <NavLink className={styles.link} to="/">
        <IoIosArrowDropleft />
        Go Back
      </NavLink>
      {/* Передаємо функцію обробки сабміту */}
      <SearchForm onSubmit={onSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <MovieList movies={movies} />

    </div>
  );
};

export default MoviesPage;
