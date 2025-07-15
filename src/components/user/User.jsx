import React from "react";
import useConversation from "../../store/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
const User = ({user}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div onClick={() => setSelectedConversation(user)} className={`flex flex-row gap-4 cursor-pointer ${isSelected && 'dark:bg-neutral-700 bg-neutral-300'} dark:hover:bg-neutral-700 hover:bg-neutral-300 px-2 rounded-xl py-2 w-full items-center relative`}>
      <div className="relative min-w-9">
        <img src={user.profilePic} alt="avatar" className="w-9 h-9 rounded-full " />
      </div>
      <div className="flex flex-col min-w-0 w-4/5">
        <p className="font-semibold text-sm md:text-md">{user.username}</p>
        <div className="text-[0.6rem] md:text-xs text-neutral-400 flex flex-row ">
          {/* <p className="truncate">{lastMessage}</p> */}
          {/* <span className="min-w-fit pl-2 ">| {lastMessage.time}</span> */}
        </div>
      </div>
      <div className="flex flex-col items-end w-1/5 pr-1 ">
        <span
          className={`max-w-2 max-h-2 w-2 h-2 rounded-full ${
            isOnline ? "bg-green-500" : "bg-red-500"
          } `}
        ></span>
      </div>
    </div>
  );
};

export default User;
