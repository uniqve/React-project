import React, { useState } from "react";
import "./style.scss";
import productsData from "../productsData";

function SerchFilter({ setTotalPages, setCurrentPage, currentPage, totalPages, setNumbersOfPage, numberOfPage }) {
  
  function changeNumberPage(e) {
    const num = +e.target.value;
    
    setNumbersOfPage(num);
    setTotalPages(Math.ceil(productsData.length / num));
    setCurrentPage(1);
  }

  return (
    <>
      <p>Показывать</p>
      <select
        name="number"
        id="select-all"
        value={numberOfPage}
        onChange={changeNumberPage}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <p>Страница</p>
      <p>{currentPage}</p>
      <p>из {totalPages}</p>
      <button
        className="btn-prev"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <img className="img-left" src="../../images/en-arrow-right-1.svg" alt="btn-left" />
      </button>
      <button
        className="btn-next"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
       <img className="img-right" src="../../images/en-arrow-right.svg" alt="btn-right" />
      </button>
    </>
  );
}

export default SerchFilter;