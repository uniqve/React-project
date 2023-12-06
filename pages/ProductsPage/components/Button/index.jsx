import React from "react";
import "./style.scss"

function Button({onClick}) {
    return(
        <>
            <button className="btn-add" onClick={onClick}>Добавить акцию</button>
        </>
    )
}

export default Button;