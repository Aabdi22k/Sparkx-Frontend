import React from "react";
import moon from "../assets/moon.svg";
import plus from "../assets/plus.svg";
import share from "../assets/share.svg";
import archive from "../assets/archive.svg";
import bookmark from "../assets/bookmark.svg";
import LogoutButton from "./LogoutButton";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="p-6">
      <div className="flex space-x-8  justify-end ">
        
        <LogoutButton />
        
        <img src={authUser?.profilePic} width="36px" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
