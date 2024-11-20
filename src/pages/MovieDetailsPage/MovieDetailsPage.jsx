import styles from "./MovieDetailsPage.module.css";
import { IoIosArrowDropleft } from "react-icons/io";

import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../../api/movies";
import { useEffect, useRef, useState } from "react";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log({ movieId });


  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  // console.log(location);
  const backLink = useRef(location.state && "/");

  const navigate= useNavigate();

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
      {movie&&(
        <div></div>
        )}
      {/* <Link to={backLink.current}>GoBack</Link>  */}

      <Link state= {{from: location.state.from}} to={`cast`}>Cast</Link>
      <Link state= {{from: location.state.from}} to={`reviews`}>Reviews</Link>
      <Outlet/>
    </div>
  );
};
export default MovieDetailsPage;
