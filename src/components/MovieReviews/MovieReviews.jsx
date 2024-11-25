import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/movies";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      if (!movieId) return;
      setLoading(true);
      setError(null);
      try {
        const reviewsData = await getMovieReviews(movieId);
        setReviews(reviewsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchReview();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.review_id || review.id}>
              <p>
                <strong>Author:</strong> {review.author}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;
