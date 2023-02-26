import LoadingIcon from "@assets/icons/loading-icon.svg";
import { useMemo } from "react";
import styles from "./Loading.module.scss";

export const enum LOADING_SIZE {
  SMALL = "small",
  NORMAL = "normal",
}

interface ILoading {
  size?: LOADING_SIZE.NORMAL | LOADING_SIZE.SMALL;
}

const Loading: React.FC<ILoading> = ({ size = LOADING_SIZE.NORMAL }) => {
  const spinnerSize = useMemo(() => {
    return {
      width: size === LOADING_SIZE.NORMAL ? "90px" : "30px",
      height: size === LOADING_SIZE.NORMAL ? "90px" : "30px",
    };
  }, [size]);
  return (
    <div className={`${styles.spinner}`} style={spinnerSize}>
      <img src={LoadingIcon} alt={LoadingIcon} />
    </div>
  );
};

export default Loading;
