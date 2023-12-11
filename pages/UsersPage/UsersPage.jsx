import React,{ useState } from "react"
import "./style.scss"
import TableClients from "./components/TableClients/index"
import clientsData from "./clientsData";
import SerchFilter from "./components/SearchFilter/index"
import InputBlock from "./components/InputBlock/index";

function UserPage() {
    const [tableDate, setTableData] = useState(clientsData)
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (query) => {
        setSearchQuery(query);

        
        if (query.trim() === "") {
            setTableData(clientsData);
          } else {
            const filteredData = tableDate.filter((client) => {
              const fullName = `${client.name} ${client.lastName}`;
              const email = `${client.email}`;
              const phoneNumber = `${client.phone}`;
              const allData = `${fullName} ${email} ${phoneNumber}`.toLowerCase();
        
              return allData.includes(query.toLowerCase());
            });
        
            setTableData(filteredData);
          }
        };



    return (
        <>
            <InputBlock
                handleSearchChange={handleSearchChange}
            />
            <SerchFilter/>
            <TableClients 
             clientsData={tableDate}
            />
        </>
        
    )
}

export default UserPage;