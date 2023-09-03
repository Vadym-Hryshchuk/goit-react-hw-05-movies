import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';
import { fetchMovieReviews } from 'api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getedCredits = async () => {
      const { results } = await fetchMovieReviews(movieId);
      setReviews(results);
    };

    getedCredits();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content, created_at }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
              <p>
                <span style={{ color: 'red' }}>Created:</span>{' '}
                {new Date(created_at).toLocaleString()}
              </p>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <p>We don't have any reviews for this movie!</p>
      )}
    </>
  );
}
