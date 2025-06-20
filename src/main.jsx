import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import logoUrl from "./assets/browser_logo.png";

// Set favicon
document.querySelector("#favicon").setAttribute("href", logoUrl);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
