import React from "react";
import "./style.scss"
import { useEffect } from "react";


const Modal = ({ active,setActive }) => {




    useEffect(() => {
        const handleEscDown = (event) => {
            if (event.key === "Escape") {
                setActive(false)
            }
        }

        const handleClickOutside = (event) => {
            if (!event.target.closest(".modal__content")) {
                setActive(false)
            }
        }

        document.addEventListener("keydown", handleEscDown);
        document.addEventListener("mousedown", handleClickOutside);


        return () => {
            document.removeEventListener("keydown", handleEscDown);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setActive]);
    


    const handleModalClick = (event) => {
        event.stopPropagation();
      };
    
     

    return(
        <div className={active ? "modal active" : "modal"}
         >
            <div className="modal__content" onClick={handleModalClick}>
            <div className="buttons">
                <button className="btn-delete">Удалить</button>
                <button className="btn-save">Сохранить</button>
                </div>
                <div className="select-inputs">
                    <div className="field">
                        <label htmlFor="name">Начисление кешбэка с покупки</label>
                        <input type="text" placeholder="20%"  />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Категория</label>
                        <select name="categories" id="categories">
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="name">Подкатегория</label>
                        <select name="categories" id="categories">
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="name">Бренд</label>
                        <select name="brands" id="brands">
                            <option>Пункт 1</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Modal;