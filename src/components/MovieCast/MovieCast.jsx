import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../api/movies";
import Loader from "../Loader/Loader";

const defaultImg = "https://www.movienewz.com/img/films/poster-holder.jpg";

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      if (!movieId) return;
      setLoading(true);
      setError(false);
      try {
        const requestData = await getMovieCredits(movieId);
        setCast(requestData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {cast!==null ? (
        <ul>
          {cast.map((item) => (
            <li key={item.cast_id}
            style={{ listStyleType: 'none', marginBottom: '15px' }}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                    : defaultImg
                }
                alt={item.name}
                width={100}
                height={150}
                style={{ borderRadius: "10px", marginRight: "10px" }}
              />
              <div>
                <strong>{item.name}</strong> as {item.character}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast Information available</p>
      )}
    </div>
  );
};

export default MovieCast;
