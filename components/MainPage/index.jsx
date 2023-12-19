import React from "react";
import "./style.module.scss";
import BrandsPage from "../../pages/BrandsPage/BrandsPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import UsersPage from "../../pages/UsersPage/UsersPage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import CitiesPage from "../../pages/CitiesPage/CitiesPage";
import ProtocolsPage from "../../pages/ProtocolsPage/ProtocolsPage";
import OrdersPage from "../../pages/OrdersPage/OrdersPage";
import BannersPage from "../../pages/BannersPage/BannersPage";
import SeminarsPage from "../../pages/SeminarsPage/SeminarsPage";
import PromoCodesPage from "../../pages/PromoCodesPage/PromoCodesPage";

import { Routes, Route } from "react-router-dom";
const MainPage = () => {
  return (
    <Routes>
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/users' element={<UsersPage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/cities' element={<CitiesPage />} />
      <Route path='/brands' element={<BrandsPage />} />
      <Route path='/protocols' element={<ProtocolsPage />} />
      <Route path='/orders' element={<OrdersPage />} />
      <Route path='/banners' element={<BannersPage />} />
      <Route path='/seminars' element={<SeminarsPage />} />
      <Route path='/promocodes' element={<PromoCodesPage />} />
    </Routes>
  );
};

export default MainPage;
