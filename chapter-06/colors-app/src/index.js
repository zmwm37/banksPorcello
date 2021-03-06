import React, { createContext } from "react";
import ColorProvider from "./color-hooks.js"
import { render } from "react-dom";
import App from "./App.js";

render(
  <ColorProvider>
    <App />
  </ColorProvider>,
  document.getElementById("root")
);
