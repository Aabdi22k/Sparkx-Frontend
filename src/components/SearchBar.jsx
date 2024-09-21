import React, { useState } from "react";
import plus from "../assets/plus.svg";
import useConversation from "../zustand/useConversation";
import useGetUsers from "../hooks/useGetUsers";
import toast from "react-hot-toast";
const SearchBar = () => {
  const [search, setSearch] = useState();
  const { setSelectedConversation } = useConversation();
  const { users } = useGetUsers();
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search must be at least 3 characters");
      return
    }

    const user = users?.find((u) => u.fullname.toLowerCase().includes(search.toLowerCase()));

    console.log(user)

    if (user) {
      setSelectedConversation(user);
      setSearch("");
    } else {
      toast.error("No User found");
    }
    
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-n5 w-full flex px-3 py-2  rounded-md items-center justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent outline-none text-xs placeholder-n4 placeholder:text-xs text-n2"
        placeholder="Username"
      />
      <button className="p-1 bg-crimson rounded-md grid place-content-center">
        <img src={plus} width="20px" height="20px" alt="" />
      </button>
    </form>
  );
};

export default SearchBar;
