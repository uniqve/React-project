import React,{ useState, useEffect } from "react";
import productsData from "../productsData";
import "./style.scss";
// import ModalForDelete from "../ModalForDelete/index";


function TableList({numbersOfPage, currentPage}) {

  const [tableData, setTableData] = useState(productsData)

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState([]);
  
    useEffect(() => {
      console.log(numbersOfPage);
      const startIndex = (currentPage - 1) * numbersOfPage;
      const endIndex = startIndex + numbersOfPage;

    setFilteredTableData(tableData.slice(startIndex, endIndex));
  }, [tableData, numbersOfPage, currentPage]);

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
            checked: !item.checked, 
          };
        }
        return item;
      });
    });
  
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter((id) => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId]; 
      }
    });
  };

  return (
    <table className="table">
      <thead>
        <tr className="table__categories">
          <td>
            <input
              className="main-checkboks"
              type="checkbox"
              checked={selectAll}
              onChange={handleMainCheckboxChange}
            />
          </td>
          <th>Категория</th>
          <th>Подкатегория</th>
          <th>Бренд</th>
          <th>Товары</th>
          <th>Кэшбэк</th>
        </tr>
      </thead>
      <tbody>
              {filteredTableData.map((item) => (
          <tr key={item.id}>
            <td>
              <input
                className="checkbox"
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleChange(item.id)}
              />
            </td>
            <td>{item.categoryName}</td>
            <td>{item.subcategory}</td>
            <td>{item.brand}</td>
            <td>{item.product}</td>
            <td>{item.cashback}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableList;