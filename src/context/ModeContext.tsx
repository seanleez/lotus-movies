import { DISPLAY_MODE_KEY } from "@constants/const";
import { CARDS_DISPLAY_MODE } from "@constants/interface";
import React, { createContext, useContext, useState } from "react";

interface IModeContext {
  mode: string;
  handleSetMode: (mode: string) => void;
}

const initContextValues = {
  mode: "",
  handleSetMode: () => {},
};

const ModeContext = createContext<IModeContext>(initContextValues);

export default function ModeContextProvider({ children }: any) {
  const [mode, setMode] = useState<string>(
    localStorage.getItem(DISPLAY_MODE_KEY) ?? CARDS_DISPLAY_MODE.GIRD_MODE,
  );

  function handleSetMode(mode: string) {
    localStorage.setItem(DISPLAY_MODE_KEY, mode);
    setMode(mode);
  }

  const passdownValues = {
    mode,
    handleSetMode,
  };
  return (
    <ModeContext.Provider value={passdownValues}>
      {children}
    </ModeContext.Provider>
  );
}

export const useModeContext = () => useContext(ModeContext);
