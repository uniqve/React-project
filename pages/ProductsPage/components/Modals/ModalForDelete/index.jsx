import React from "react";
import styles from "./styles.module.scss";
import IconModalClose from "../../../../../assets/icons/Закрыть.svg?react";
import IconModalDelete from "../../../../../assets/icons/Корзина.svg?react";

function ModalForDelete({
  data,
  handleClickDeleteButton,
  handleClickCloseButton,
  hideModalForDelete,
}) {
  const counter = data.filter((item) => item.checked).length;
  const classChange = counter > 0 ? "active" : "hidden";

  return (
    <>
      <div
        className={`${styles["selected-items"]} ${styles[classChange]} ${styles[hideModalForDelete]}`}>
        {`Количество выбранных позиций: ${counter}`}
        <div className={styles["delete-items"]}>
          <IconModalDelete onClick={handleClickDeleteButton} />
          <p onClick={handleClickDeleteButton}>Удалить</p>
          <IconModalClose onClick={handleClickCloseButton} />
        </div>
      </div>
    </>
  );
}

export default ModalForDelete;
