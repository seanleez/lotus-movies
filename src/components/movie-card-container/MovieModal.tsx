import { IMovie } from "@constants/interface";
import styles from "./MovieModal.module.scss";
type TPosition = {
  top: number;
  left: number;
};
interface IMovieModal {
  movie: IMovie;
  position: TPosition;
}

const MovieModal: React.FC<IMovieModal> = ({ movie, position }) => {
  return (
    <div className={styles.modal} style={position}>
      <h4>{movie.title}</h4>
      <p>({new Date(movie.release_date).getFullYear()})</p>
      <p className={styles.overview}>"{movie.overview}"</p>
      <p>
        <span className={styles.imdb}>IMDb</span>
        <span>{movie.vote_average}</span>
      </p>
    </div>
  );
};

export default MovieModal;
