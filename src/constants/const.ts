import { IModeConfig, CARDS_DISPLAY_MODE } from "./interface";
import GridIcon from "@assets/icons/grid-icon.svg";
import ListIcon from "@assets/icons/list-icon.svg";

export const DISPLAY_MODES: IModeConfig[] = [
  {
    label: CARDS_DISPLAY_MODE.GIRD_MODE,
    icon: GridIcon,
  },
  {
    label: CARDS_DISPLAY_MODE.LIST_MODE,
    icon: ListIcon,
  },
];

export const DISPLAY_MODE_KEY = "Display Mode";
