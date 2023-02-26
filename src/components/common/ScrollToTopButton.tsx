import React, { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.scss";
import UpArrow from "@assets/icons/up-arrow-icon.svg";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return <React.Fragment />;

  return (
    <button className={styles.button} onClick={handleButtonClick}>
      <img src={UpArrow} alt="up" />
    </button>
  );
};

export default ScrollToTopButton;
