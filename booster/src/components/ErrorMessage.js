import React from "react";
import styles from "../styles/App.module.css";

const ErrorMessage = ({ error }) => {
  return (
    <div className={styles.modal}>
      <p>{error.error ? error.error.message : error.message}</p>
    </div>
  );
};

export default ErrorMessage;
