import React,{} from "react";
import "./style.scss";



function TableList({ handleMainCheckboxChange, handleChange, selectedItems, selectAll, filteredTableData}) {



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