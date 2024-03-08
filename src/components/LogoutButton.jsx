import React from "react";
import logout1 from "../assets/logout.svg";
import useAuth from "../hooks/useAuth.js";

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <button onClick={logout}>
      <img src={logout1} width="20" alt="" />
    </button>
  );
};

export default LogoutButton;
