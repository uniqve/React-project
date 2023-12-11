import React from "react";
import "./style.scss"

function InputBlock({handleSearchChange}) {
    return(
        <div className="input-filter">
            <input
                className="input-block"
                placeholder="Найти"
                type="text" 
                onChange={(e) => handleSearchChange(e.target.value)}
                />
        </div>
    )
}

export default InputBlock;