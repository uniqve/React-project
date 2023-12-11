import React,{} from "react";
import "./style.scss";



function TableClients({clientsData}) {

    function formatToPhoneNumber(phoneNumber) {
        const cleaned = ('' + phoneNumber).replace(/\D/g,'');
        const mask = '+X (XXX) XXX-XX-XX'

        let index = 0;
        return mask.replace(/X/g,() => cleaned[index++] || '')
    }
        
  return (
    <table className="table">
      <thead>
        <tr className="table__categories">
                  <th>ФИ</th>
                  <th>Почта</th>
                  <th>Телефон</th>
        </tr>
      </thead>
      <tbody>
              {clientsData.map((item, index) => (
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