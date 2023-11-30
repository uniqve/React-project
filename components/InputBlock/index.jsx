import React from "react";

function InputBlock() {
    return (
        <>
            <div className="container">
                <input placeholder="Найти" type="text" />
                <div className="statistics">
                    <p>Показывать</p>
                    <select name="number" id="select-all"></select>
                    <p>Страница</p>
                    <select name="number-select" id="select-page"></select>
                    <p>из 1</p>
                    <button className="btn-prev"><img src="../images/en-arrow-right-1.svg" alt="prev" /></button>
                    <button className="btn-next"><img src="../images/en-arrow-right.svg" alt="next" /></button>
                    <button>Добавить акцию</button>
                    <ul>
                        <li>
                            <select name="check" id=""></select>
                            <p>Категория</p>
                            <p>Подкатегория</p>
                            <p>Бренд</p>
                            <p>Товары</p>
                            <p>Кэшбэк</p>
                        </li>
                        <li>
                        <select name="check" id=""></select>
                            <p>Эстетический уход</p>
                            <p>Очищение</p>
                            <p>-</p>
                            <p>-</p>
                            <p>20%</p>
                        </li>
                        <li>
                        <select name="check" id=""></select>
                            <p>Эстетический уход</p>
                            <p>Очищение</p>
                            <p>-</p>
                            <p>-</p>
                            <p>20%</p>
                        </li>
                        <li>
                        <select name="check" id=""></select>
                            <p>Эстетический уход</p>
                            <p>Очищение</p>
                            <p>-</p>
                            <p>-</p>
                            <p>20%</p>
                        </li>
                        <li>
                        <select name="check" id=""></select>
                            <p>Эстетический уход</p>
                            <p>Очищение</p>
                            <p>-</p>
                            <p>-</p>
                            <p>20%</p>
                        </li>
                        <li>
                        <select name="check" id=""></select>
                            <p>Эстетический уход</p>
                            <p>Очищение</p>
                            <p>-</p>
                            <p>-</p>
                            <p>20%</p>
                        </li>
                        <li>
                        <select name="check" id=""></select>
                            <p>Эстетический уход</p>
                            <p>Очищение</p>
                            <p>-</p>
                            <p>-</p>
                            <p>20%</p>
                        </li>
                        <li>
                        <select name="check" id=""></select>
                            <p>Эстетический уход</p>
                            <p>Очищение</p>
                            <p>-</p>
                            <p>-</p>
                            <p>20%</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InputBlock;