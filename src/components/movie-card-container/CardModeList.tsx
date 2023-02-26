import { ImageWithSkeleton } from "@components/common";
import { IMovie } from "@constants/interface";
import styles from "./CardModeList.module.scss";
import PlayIcon from "@assets/icons/play-icon.svg";
interface CardProps {
  movie: IMovie;
}

const CardModeList: React.FC<CardProps> = ({ movie }) => {
  return (
    <>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <ImageWithSkeleton
            src={import.meta.env.VITE_IMAGE_SOURCE + movie.backdrop_path}
            alt="poster"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.infor}>
            <h3>
              {movie.title}{" "}
              <span>({new Date(movie.release_date).getFullYear()})</span>
            </h3>

            <p className={styles.overview}>"{movie.overview}"</p>
            <p>
              <span className={styles.imdb}>IMDb:</span>
              <span>{movie.vote_average}</span>
            </p>
          </div>
          <div className={styles.features}>
            <button className={styles.addFavorite}>+</button>
            <button className={styles.playButton}>
              <img src={PlayIcon} alt="play" />
            </button>
            <button className={styles.watchNowButton}>Watch now</button>
          </div>
        </div>
      </article>
    </>
  );
};

export default CardModeList;
