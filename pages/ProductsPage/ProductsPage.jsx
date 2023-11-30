import React from "react"
import "./style.scss"
import Input from "./components/Input/index";
import SerchFilter from "./components/SearchFilter/index";
import Button from "./components/Button"; "./components/Button/index"
import TableList from "./components/TableList/index";


function ProductsPage() {
    

        return (
            <div className="container">
                <Input />
                <div className="page-search">
                    <SerchFilter />
                </div>
                <Button />
           
                <TableList/>
                
                
            </div>
        )
    }


export default ProductsPage;