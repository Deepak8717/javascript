import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./styles/App.module.css";

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.app}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
