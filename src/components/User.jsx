import React from "react";
import useConversation from "../zustand/useConversation.js";
import { useSocketContext } from "../context/SocketContext.jsx";
const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div className=" w-full flex-row  space-y-1">
      <div
        onClick={() => setSelectedConversation(user)}
        id="up"
        className="w-full flex items-center gap-4 p-2"
      >
        <div className="relative">
          <img src={user.profilePic} width="44px" alt="" />{" "}
          <span className={`top-0 left-8 absolute  w-3.5 h-3.5 ${isOnline ? "bg-green" : "bg-red"}  dark:bg-gray-500 dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg-green-500 dark:bg-red-500  dark:bg- border-2 border-white dark:border-gray-800 rounded-full`}></span>
        </div>
        <span className="text-sm">{user.fullname}</span>
      </div>
      <div
        id="ub"
        className={` w-full h-0.5 ${
          isSelected ? "bg-crimson" : "bg-n5"
        } rounded-md `}
      ></div>
    </div>
  );
};

export default User;
