import React from "react"
import "./style.scss"

function ModalForDelete({ data, handleClickDeleteButton, handleClickCloseButton, modalOnPage,hide, setHide }) {
    

    const counter = data.filter(item => item.checked).length;
    const classChange = counter > 0 ? "active" : "hidden";
   

    return (
        <>
            <div className={`selected-items ${classChange} ${hide}`}
            >{`Количество выбранных позиций: ${counter}`}
      <div className="delete-items">
                        <img
                            src="../../images/Корзина.svg"
                        alt="basket" 
                        onClick={handleClickDeleteButton}
                    />
        <p onClick={handleClickDeleteButton}>Удалить</p>
        <img
          className="close-items"
          src="../../images/Закрыть.svg"
                        alt="exit"
                        onClick={handleClickCloseButton}
         />
            </div>
            </div>
        </>
    )}
       
    
    
                

    export default ModalForDelete;