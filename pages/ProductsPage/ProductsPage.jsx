import React, { useState, useEffect }  from "react"
import "./style.scss"

import Input  from "./components/Input/index";
import SerchFilter from "./components/SearchFilter/index";
import Button from "./components/Button"; "./components/Button/index"
import TableList from "./components/TableList/index";
import Modal from "./components/Modal/index"
import ModalForDelete from "./components/ModalForDelete";
import productsData from "./components/productsData";



function ProductsPage() {
    const [tableData,setTableData] = useState(productsData);
    const [modalActive,setModalActive] = useState(false);
    const [numbersOfPage, setNumbersOfPage] = useState(10)
    const [totalPages,setTotalPages] = useState(1)
    const [currentPage,setCurrentPage] = useState(1)
    const [selectAll,setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const [filteredTableData,setFilteredTableData] = useState([]);
    const [modalOnPage,setModalonPage] = useState(true);
    const [hide, setHide] = useState('')
    const [newElement, setNewElement] = useState({
        category: 'Эстетический уход',
        subcategory: 'Очищение',
        cashback: '5%',
        brand: 'Kosmoteros Personnel Paris',
        checked: false,
    });
    
   
    
  
      const handleSaveButtonClick = (id) => {
        const newId = Date.now(); 
          const newAction = {
            id: newId,
            categoryName: newElement.category,
            subcategory: newElement.subcategory,
            brand: newElement.brand,
            product: "-",
            cashback: newElement.cashback,
            checked: false
          };
      
          

          setTableData((tableData) => [...tableData, newAction]);
          
       
          setModalActive(false);
          setTotalPages(Math.ceil(tableData.length + 1 / numbersOfPage))
       
          
        };
            
    


    function handleClickCloseButton() {
        setHide('hidden')
    }
    
    
    function handleClickDeleteButton() {
        const refreshItems = tableData.filter((item) => !item.checked);
        const refreshPages = Math.ceil(refreshItems.length / numbersOfPage);
        
        const updatedCurrentPage = currentPage === totalPages && refreshPages < totalPages ? totalPages - 1 : currentPage;

        setTableData(refreshItems);
        setCurrentPage(updatedCurrentPage);
        setTotalPages(refreshPages);
    }


    useEffect(() => {
      const startIndex = (currentPage - 1) * numbersOfPage;
      const endIndex = startIndex + numbersOfPage;

    setFilteredTableData(tableData.slice(startIndex, endIndex));
    },[tableData,numbersOfPage,currentPage,totalPages]);
    




    const handleMainCheckboxChange = (event) => {
        const checked = event.target.checked;
        setSelectAll(checked);
        setTableData((prevTableData) =>
          prevTableData.map((item) => ({
            ...item,
            checked: checked,
          }))
        );
            
        setSelectedItems(checked ? tableData.map((item) => item.id) : []);
      };

    
    
    
      const handleChange = (itemId) => {
        setTableData((prevTableData) => {
          return prevTableData.map((item) => {
            if (item.id === itemId) {
              return {
                ...item,
                checked: !item.checked
              };
            }
            return item;
          });
          
        });
        setHide('')
        setSelectedItems((prevSelectedItems) => {
          if (prevSelectedItems.includes(itemId)) {
            return prevSelectedItems.filter((id) => id !== itemId);
          } else {
            return [...prevSelectedItems, itemId]; 
          }
        });
        
      };


    
      useEffect(() => {
        const total = Math.ceil(tableData.length / numbersOfPage);
        setTotalPages(total);
      }, [numbersOfPage, tableData.length, totalPages]);

    
    
    
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
                    <ModalForDelete
                    handleClickDeleteButton={handleClickDeleteButton}
                    data={tableData}
                    handleClickCloseButton={handleClickCloseButton}
                    modalOnPage={modalOnPage}
                    hide={hide} 
                    setHide={setHide}
                        />
                
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    handleSaveButtonClick={handleSaveButtonClick} 
                    newElement={newElement}
                    setNewElement={setNewElement}
                    />
                <TableList
                    numbersOfPage={numbersOfPage}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handleMainCheckboxChange={handleMainCheckboxChange}
                    handleChange={handleChange}
                    selectedItems={selectedItems}
                    selectAll={selectAll}
                    filteredTableData={filteredTableData}
                />
                
                
            </div>
        )
    }


export default ProductsPage;