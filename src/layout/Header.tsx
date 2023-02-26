import LotusIcon from "@assets/icons/lotus-icon.svg";
import { SwitchDisplayModeButton } from "@components/header";
import { INavigationItem, PATH } from "@constants/interface";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
const NAVIGATION_LIST: INavigationItem[] = [
  {
    path: PATH.NOW_PLAYING,
    label: "Now Playing",
  },
  {
    path: PATH.TOP_RATED,
    label: "Top Rated",
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className={styles.header}>
      <ul className={styles.navigationList}>
        {NAVIGATION_LIST.map((item: INavigationItem, i: number) => (
          <li
            key={i}
            onClick={() => navigate(item.path)}
            className={clsx(pathname === item.path && styles.isActive)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <h1
        className={styles.textLogo}
        onClick={() => navigate(PATH.NOW_PLAYING)}
      >
        eLotus Movies
      </h1>

      <img
        className={styles.imageLogo}
        onClick={() => navigate(PATH.NOW_PLAYING)}
        src={LotusIcon}
        alt={LotusIcon}
      />
      <SwitchDisplayModeButton />
    </div>
  );
};

export default Header;
