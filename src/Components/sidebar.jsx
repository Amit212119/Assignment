import React, { Children, useState } from "react";
import {
  BsHouseFill,
  BsFillBasketFill,
  BsPersonFill,
  BsWallet2,
  BsClipboardDataFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Sidebar = ({children}) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BsHouseFill />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <BsFillBasketFill />,
    },
    {
      path: "/customer",
      name: "Customers",
      icon: <BsPersonFill />,
    },
    {
      path: "/income",
      name: "Income",
      icon: <BsWallet2 />,
    },
    {
      path: "/promote",
      name: "Promote",
      icon: <BsClipboardDataFill />,
    },
    {
      path: "/help",
      name: "Help",
      icon: <BsTelephoneFill />,
    },
  ];
  const [logo, setLogo] = useState("");

  const handleClick = (name) => {
    setLogo(name);
  }
  
  
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="top-section">
            <h1 className="logo">{logo}</h1>
          </div>
          {menuItem.map((item, index) => {
            return (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                onClick={() =>handleClick(item.name)}
                
                
              >
                <div className="icon">{item.icon}</div>
                <div className="text">{item.name}</div>
              </NavLink>
            );
          })}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};
export default Sidebar;
