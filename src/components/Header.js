import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="logoblock">
        <Logo url="logo.png" />
      </div>
    </div>
  );
};

export default Header;
