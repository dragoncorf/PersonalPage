import React from "react";

const MenuIcon = () => {
  return (
    <div className="menu">
      <div></div>
      <div></div>
      <div></div>
      <style jsx>
        {`
          .menu div {
            width: 30px;
            height: 4px;
            background-color: black;
            margin: 6px 0;
          }
        `}
      </style>
    </div>
  );
};

export default MenuIcon;
