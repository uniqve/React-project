import React from "react";
import styles from "./styles.module.scss";
import IconBtnLeft from "../../assets/icons/en-arrow-right-1.svg?react";
import IconBtnRight from "../../assets/icons/en-arrow-right.svg?react";

function SearchFilter({
  setCurrentPage,
  currentPage,
  totalPages,
  numberOfPage,
  changeNumberPage,
}) {
  return (
    <div className={styles.pageSearch}>
      <p>Показывать</p>
      <select
        name='number'
        id='select-all'
        value={numberOfPage}
        onChange={changeNumberPage}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
      <div className={styles.page_block}>
        <p>Страница</p>
        <p>{currentPage}</p>
        <p>из {totalPages}</p>
      </div>
      <button
        className={styles.btn_prev}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}>
        <IconBtnLeft />
      </button>
      <button
        className={styles.btn_next}
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}>
        <IconBtnRight />
      </button>
    </div>
  );
}

export default SearchFilter;
