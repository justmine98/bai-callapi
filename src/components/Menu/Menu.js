import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";

const menus = [
  {
    name: "Trang Chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lí sản phẩm",
    to: "/product-list",
    exact: false,
  },
];


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  var active = activeOnlyWhenExact ? "active" : "";
  return (
    <li className={active}>
    <Link to={to}>{label}</Link>
  </li>
  );
};

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">Call API</a>
        <ul className="nav navbar-nav">
         {this.showMenus(menus)}
        </ul>
      </div>
    );
  }
  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    console.log("showMenus", result);
    return result;
  };
}
export default Menu;
