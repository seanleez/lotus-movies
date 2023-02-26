import { ImageWithSkeleton } from "@components/common";
import { IMovie } from "@constants/interface";
import { useRef, useState } from "react";
import styles from "./CardModeGrid.module.scss";
import MovieModal from "./MovieModal";
interface CardProps {
  movie: IMovie;
}

const MODAL_WIDTH = 350;
const MODAL_HEIGHT = 250;

const CardModeGrid: React.FC<CardProps> = ({ movie }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const articleRef = useRef<HTMLElement>(null);

  function handleClick(event: React.MouseEvent) {
    const { top: articleTop, left: articleLeft } =
      articleRef.current!.getBoundingClientRect();
    setShowModal(true);
    setModalPosition({
      top:
        event.clientY + MODAL_HEIGHT > window.innerHeight
          ? event.clientY - articleTop - MODAL_HEIGHT
          : event.clientY - articleTop,
      left:
        event.clientX + MODAL_WIDTH > window.innerWidth
          ? event.clientX - articleLeft - MODAL_WIDTH
          : event.clientX - articleLeft,
    });
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      <article
        ref={articleRef}
        className={styles.card}
        onClick={handleClick}
        onMouseLeave={handleCloseModal}
      >
        <ImageWithSkeleton
          src={import.meta.env.VITE_IMAGE_SOURCE + movie.backdrop_path}
          alt="poster"
        />
        <div className={styles.content}>
          <div className={styles.infor}>
            <h4>{movie.title}</h4>
            <p>
              <span className={styles.imdb}>IMDb</span>
              <span>{movie.vote_average}</span>
            </p>
          </div>
          <div className={styles.features}>
            <button className={styles.addFavorite}>+</button>
            <button>Watch now</button>
          </div>
        </div>
        {showModal && <MovieModal movie={movie} position={modalPosition} />}
      </article>
    </>
  );
};

export default CardModeGrid;
