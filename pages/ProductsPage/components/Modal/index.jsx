import React from "react";
import "./style.scss"
import { useEffect} from "react";



const Modal = ({ active,setActive, handleSaveButtonClick, newElement, setNewElement}) => {
    
   
    
      const handleCategoryChange = (event) => {
          setNewElement({...newElement, category: event.target.value})
      };
    
      const handleSubcategoryChange = (event) => {
        setNewElement({...newElement, subcategory: event.target.value})
      };
    
      const handleBrandChange = (event) => {
        setNewElement({...newElement, brand: event.target.value})
          
      };
      const handleCashbackChange = (event) => {
        setNewElement({...newElement, cashback: event.target.value + "%"})
      };


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
    


  
    
     

    return(
        <div className={active ? "modal active" : "modal"}
         >
            <div className="modal__content">
            <div className="buttons">
                <button className="btn-delete">Удалить</button>
                    <button className="btn-save" onClick={handleSaveButtonClick}>Сохранить</button>
                </div>
                <div className="select-inputs">
                    <div className="field">
                        <label htmlFor="name">Начисление кешбэка с покупки</label>
                        <input type="number" placeholder="5%" onChange={handleCashbackChange} />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Категория</label>
                        <select name="categories" id="categories" onClick={handleCategoryChange}>
                            <option>Эстетический уход</option>
                            <option>Косметология</option>
                            <option>Модный приговор</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="name">Подкатегория</label>
                        <select name="categories" id="categories" onClick={handleSubcategoryChange}>
                            <option>Очищение</option>
                            <option>Скрабы</option>
                            <option>Кремы и гели</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="name">Бренд</label>
                        <select name="brands" id="brands" onClick={handleBrandChange}>
                            <option>Kosmoteros Personnel Paris</option>
                            <option>Frolyis Pro</option>
                            <option>Academie</option>
                        </select>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Modal;