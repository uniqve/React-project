import React from "react";
import styles from "./styles.module.scss";

function Button({ onClick }) {
  return (
    <button className={styles.btn_add} onClick={onClick}>
      Добавить акцию
    </button>
  );
}

export default Button;
