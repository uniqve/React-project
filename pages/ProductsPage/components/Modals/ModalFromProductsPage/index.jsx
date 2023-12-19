import React from "react";
import styles from "./styles.module.scss";
import { useEffect } from "react";

const Modal = ({
  active,
  setActive,
  handleSaveButtonClick,
  newElement,
  setNewElement,
}) => {
  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setNewElement({ ...newElement, category: value });
  };

  const handleSubcategoryChange = (event) => {
    const { value } = event.target;
    setNewElement({ ...newElement, subcategory: value });
  };

  const handleBrandChange = (event) => {
    const { value } = event.target;
    setNewElement({ ...newElement, brand: value });
  };
  const handleCashbackChange = (event) => {
    const { value } = event.target;
    setNewElement({ ...newElement, cashback: value + "%" });
  };

  useEffect(() => {
    const handleEscDown = (event) => {
      if (event.key === "Escape") {
        setActive(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal__content")) {
        setActive(false);
      }
    };

    document.addEventListener("keydown", handleEscDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActive]);

  return (
    <div className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.buttons}>
          <button className={styles.btn_delete}>Удалить</button>
          <button className={styles.btn_save} onClick={handleSaveButtonClick}>
            Сохранить
          </button>
        </div>
        <div className={styles.select_inputs}>
          <div className={styles.field}>
            <label htmlFor='name'>Начисление кешбэка с покупки</label>
            <input
              type='number'
              placeholder='5%'
              onChange={handleCashbackChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor='name'>Категория</label>
            <select
              name='categories'
              id='categories'
              onClick={handleCategoryChange}>
              <option>Эстетический уход</option>
              <option>Косметология</option>
              <option>Модный приговор</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor='name'>Подкатегория</label>
            <select
              name='categories'
              id='categories'
              onClick={handleSubcategoryChange}>
              <option>Очищение</option>
              <option>Скрабы</option>
              <option>Кремы и гели</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor='name'>Бренд</label>
            <select name='brands' id='brands' onClick={handleBrandChange}>
              <option>Kosmoteros Personnel Paris</option>
              <option>Frolyis Pro</option>
              <option>Academie</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
