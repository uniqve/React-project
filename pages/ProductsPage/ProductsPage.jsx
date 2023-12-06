import React, { useState, useEffect }  from "react"
import "./style.scss"
import Input from "./components/Input/index";
import SerchFilter from "./components/SearchFilter/index";
import Button from "./components/Button"; "./components/Button/index"
import TableList from "./components/TableList/index";
import Modal from "./components/Modal/index"
import productsData from "./components/productsData";



function ProductsPage() {
    const [modalActive,setModalActive] = useState(false);
    const [numbersOfPage, setNumbersOfPage] = useState(10)
    const [totalPages,setTotalPages] = useState(1)
    const [currentPage,setCurrentPage] = useState(1)
    
    
    console.log(numbersOfPage);


    function changeNumberPage(e) {
        setNumbersOfPage(parseInt(e.target.value));
        console.log(e.target);
      }
    
      useEffect(() => {
        const total = Math.ceil(productsData.length / numbersOfPage);
        setTotalPages(total);
      }, [numbersOfPage]);

    
        return (
            <div className="container">
                <Input />
                <div className="page-search">
                    <SerchFilter 
                        numbersOfPage={numbersOfPage}
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        setTotalPages={setTotalPages}
                        setNumbersOfPage={setNumbersOfPage}
                />
                </div>
                <Button onClick={() => setModalActive(!modalActive)} />
                <Modal active={modalActive} setActive={setModalActive} />
                <TableList
                    numbersOfPage={numbersOfPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
                
                
            </div>
        )
    }


export default ProductsPage;