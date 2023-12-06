import React from "react"

function ModalForDelete() {
    
    return (
        <>
        <div className="selected-items">{`Количество выбранных позиций: `}
      <div className="delete-items">
                        <img
                            src="../../images/Корзина.svg"
                            alt="basket" 
                            />
        <p >Удалить</p>
        <img
          className="close-items"
          src="../../images/Закрыть.svg"
          alt="exit"
         />
            </div>
            </div>
        </>
    )}
       
    
    
                

    export default ModalForDelete;