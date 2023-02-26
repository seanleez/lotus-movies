import ModeContextProvider from "./context/ModeContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModeContextProvider>
        <App />
      </ModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
