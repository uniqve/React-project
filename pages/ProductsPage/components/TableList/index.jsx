import React,{ useState } from "react";

import "./style.scss";

function TableList() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      categoryName: "Эстетический уход",
      subcategory: "Очищение",
      brand: "Academie",
      product: "Гоммаж с кремом и витамином",
      cashback: "20%",
      checked: false,
    },
    {
      id: 2,
      categoryName: "Эстетический уход",
      subcategory: "Очищение",
      brand: "Academie",
      product: "Гоммаж с кремом и витамином",
      cashback: "20%",
      checked: false,
    },
    {
      id: 3,
      categoryName: "Эстетический уход",
      subcategory: "Очищение",
      brand: "Academie",
      product: "Гоммаж с кремом и витамином",
      cashback: "20%",
      checked: false,
    },
    {
      id: 4,
      categoryName: "Эстетический уход",
      subcategory: "Очищение",
      brand: "-",
      product: "Гоммаж с кремом и витамином",
      cashback: "20%",
      checked: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);


    
    

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
              {tableData.map((item) => (
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