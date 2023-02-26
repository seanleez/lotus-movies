import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import styles from "./ImageWithSkeleton.module.scss";

interface IImageWithSkeleton {
  src: string;
  alt: string;
}

const ImageWithSkeleton: React.FC<IImageWithSkeleton> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.imageWrapper}>
      {!isLoaded && <div className={styles.skeleton}></div>}
      <img
        src={src}
        alt={alt}
        ref={imgRef}
        className={clsx(styles.image, isLoaded && styles.loaded)}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithSkeleton;
