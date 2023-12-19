import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import TableClients from "./components/TableClients/index";
import clientsData from "../../mock_data/clientsData";
import SearchFilter from "../../components/SearchFilter/index";
import InputBlock from "./components/InputBlock/index";

function UserPage() {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [numbersOfPage, setNumbersOfPage] = useState(10);
  const [tableData, setTableData] = useState(clientsData);
  const [filteredTableData, setFilteredTableData] = useState([]);

  const handleSearchChange = (query) => {
    if (query.trim() === "") {
      setTableData(clientsData);
    } else {
      const filteredData = clientsData.filter((client) => {
        const fullName = `${client.name} ${client.lastName}`;
        const email = `${client.email}`;
        const phoneNumber = `${client.phone}`;
        const allData = `${fullName} ${email} ${phoneNumber}`.toLowerCase();

        return allData.includes(query.toLowerCase());
      });

      setTableData(filteredData);
      setTotalPages(Math.ceil(filteredData.length / numbersOfPage));
    }
  };

  function changeNumberPage(e) {
    const num = +e.target.value;
    setNumbersOfPage(num);
  }

  useEffect(() => {
    setTotalPages(Math.ceil(tableData.length / numbersOfPage));
  }, [tableData, numbersOfPage]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * numbersOfPage;
    const endIndex = startIndex + numbersOfPage;

    setFilteredTableData(tableData.slice(startIndex, endIndex));
  }, [currentPage, numbersOfPage, tableData]);

  return (
    <div className={styles.content}>
      <InputBlock handleSearchChange={handleSearchChange} />
      <SearchFilter
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setNumbersOfPage={setNumbersOfPage}
        setTotalPages={setTotalPages}
        changeNumberPage={changeNumberPage}
      />
      <TableClients
        clientsData={tableData}
        filteredTableData={filteredTableData}
      />
    </div>
  );
}

export default UserPage;
