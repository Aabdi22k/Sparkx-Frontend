import React from "react";
import logo from "../assets/logo.svg";


const Logo = () => {
  return (
    <div className="p-3 gap-4 flex items-center">
      <img src={logo} alt="" />
      <span className="logo text-n2 text-xl">Sparkx</span>
    </div>
  );
};

export default Logo;
