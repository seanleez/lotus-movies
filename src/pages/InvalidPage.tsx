import { PATH } from "@constants/interface";
import { useNavigate } from "react-router-dom";
import styles from "./InvalidPage.module.scss";

const InvalidPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.container}`}>
      <p className={`${styles.title}`}>404</p>
      <p className={`${styles.message}`}>The page could not be found !</p>
      <button
        className="primary-button"
        onClick={() => navigate(PATH.NOW_PLAYING)}
      >
        Go To Home Page
      </button>
    </div>
  );
};

export default InvalidPage;
