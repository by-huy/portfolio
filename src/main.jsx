import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cursor from "./components/ui/Cursor.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cursor />
    <App />
  </React.StrictMode>
);
