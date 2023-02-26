import GridIcon from "@assets/icons/grid-icon.svg";
import ListIcon from "@assets/icons/list-icon.svg";
import { DISPLAY_MODES } from "@constants/const";
import { IModeConfig, CARDS_DISPLAY_MODE } from "@constants/interface";
import { useModeContext } from "@context/ModeContext";
import useClickOutside from "@hooks/useClickOutside";
import { useRef, useState } from "react";
import styles from "./SwitchDisplayModeButton.module.scss";

const SwitchDisplayModeButton: React.FC = () => {
  const { mode, handleSetMode } = useModeContext();
  const [toggle, setToggle] = useState<boolean>();
  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, handleClickOutside);

  function handleClickOutside() {
    setToggle(false);
  }

  function handleClickModeItem(mode: string) {
    handleSetMode(mode);
    setToggle(false);
  }

  return (
    <div ref={containerRef} className={styles.container}>
      <button onClick={() => setToggle(!toggle)}>
        <img
          src={mode === CARDS_DISPLAY_MODE.GIRD_MODE ? GridIcon : ListIcon}
          alt="mode"
        />
      </button>
      {toggle && (
        <ul className={styles.modeList}>
          {DISPLAY_MODES.map((mode: IModeConfig, i: number) => (
            <li key={i} onClick={() => handleClickModeItem(mode.label)}>
              <img src={mode.icon} alt="mode" />
              <span>{mode.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchDisplayModeButton;
