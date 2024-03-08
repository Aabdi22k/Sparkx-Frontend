import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserList from "./UserList";

const Sidebar = () => {
  return (
    <div className="min-w-xs h-full max-w-sm px-6 py-2 w-full flex flex-col content-start gap-6 items-center justify-items-center row-span-5 ">
      <Logo />

      <SearchBar />

      <UserList />
    </div>
  );
};

export default Sidebar;
