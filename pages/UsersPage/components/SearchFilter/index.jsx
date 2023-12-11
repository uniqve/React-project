import React from "react";
import "./style.scss";
import clientsData from "../../clientsData";


function SerchFilter({setNumbersOfPage, setTotalPages, setCurrentPage, currentPage, totalPages, numberOfPage}) {
  
  function changeNumberPage(e) {
    const num = +e.target.value;
    
    setNumbersOfPage(num);
    setTotalPages(Math.ceil(clientsData.length / num));
    setCurrentPage(1);
  }

  return (
      <>
          <div className="page-search">
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
              <div className="page-block">
                <p>Страница</p>
                <p>{currentPage}</p>
                <p>из {totalPages}</p>
              </div>
      
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
          </div>
      
    </>
  );
}

export default SerchFilter;