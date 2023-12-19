import React from "react";
import styles from "./styles.module.scss";

function TableClients({ clientsData, filteredTableData}) {
  function formatToPhoneNumber(phoneNumber) {
    const cleaned = ("" + phoneNumber).replace(/\D/g, "");
    const mask = "+X (XXX) XXX-XX-XX";

    let index = 0;
    return mask.replace(/X/g, () => cleaned[index++] || "");
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.table__categories}>
          <th>ФИ</th>
          <th>Почта</th>
          <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
        {filteredTableData.map((item, index) => (
          <tr key={index}>
            <td>{`${item.name} ${item.lastName}`}</td>
            <td>{item.email}</td>
            <td>{formatToPhoneNumber(item.phone)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableClients;
