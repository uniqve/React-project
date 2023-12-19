import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../components/Sidebar/styles.module.scss";
import "../../src/Styles/style.scss";
import IconProducts from "../../assets/icons/Component1";
import IconUsers from "./../../assets/icons/Component2";
import IconCategories from "./../../assets/icons/Component3";
import IconsCities from "./../../assets/icons/Component4";
import IconBrands from "./../../assets/icons/Component5";
import IconProtocols from "./../../assets/icons/Component6";
import IconOrders from "./../../assets/icons/Component7";
import IconBanners from "./../../assets/icons/Component8";
import IconSeminars from "../../assets/icons/Component9";
import IconPromocodes from "./../../assets/icons/Component10";

const Sidebar = () => {
  const navLinks = [
    { to: "/products", label: "Продукты", icon: <IconProducts /> },
    { to: "/users", label: "Пользователи", icon: <IconUsers /> },
    { to: "/categories", label: "Категории", icon: <IconCategories /> },
    { to: "/cities", label: "Города", icon: <IconsCities /> },
    { to: "/brands", label: "Бренды", icon: <IconBrands /> },
    { to: "/protocols", label: "Протоколы", icon: <IconProtocols /> },
    { to: "/orders", label: "Заказы", icon: <IconOrders /> },
    { to: "/banners", label: "Баннеры", icon: <IconBanners /> },
    { to: "/seminars", label: "Семинары", icon: <IconSeminars /> },
    { to: "/promocodes", label: "Промокоды", icon: <IconPromocodes /> },
  ];

  const navLinksJSX = navLinks.map((navLink) => {
    const isActive = window.location.pathname === navLink.to;
    const linkClassName = isActive ? "active-link" : "";

    return (
      <li key={navLink.to}>
        <NavLink to={navLink.to} className={linkClassName}>
          {navLink.icon}
          {navLink.label}
        </NavLink>
      </li>
    );
  });

  return <ul className={styles.sidebar}>{navLinksJSX}</ul>;
};

export default Sidebar;
