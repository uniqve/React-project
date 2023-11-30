import React,  { useState } from "react";
import './style.scss'


function SerchFilter(onPerPageChange) {

    const [perPage, setPerPage] = useState(10);

    const handlePerPageChange = (e) => {
        const value = e.target.value;
        
      };

    return(
        <>
            <p>Показывать</p>
            <select name="number" id="select-all" value={perPage} onChange={handlePerPageChange}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <p>Страница</p>
                    <select name="number-select" id="select-page">
                        <option value="1">1</option>
                    </select>
                    <p>из 1</p>
                    <button className="btn-prev"><img src="../images/en-arrow-right-1.svg" alt="prev" /></button>
                    <button className="btn-next"><img src="../images/en-arrow-right.svg" alt="next" /></button>
        </>
    )
}

export default SerchFilter;