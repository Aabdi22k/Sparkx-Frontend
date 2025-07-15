import React from "react";
import useConversation from "../../store/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
const UserCompact = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div className="flex flex-row gap-4  items-center relative">
      <div
        onClick={() => setSelectedConversation(user)}
        className={`relative min-w-12 flex py-2 px-2 ${
          isSelected && "dark:bg-neutral-700 bg-neutral-300"
        } dark:hover:bg-neutral-700 hover:bg-neutral-300 rounded-xl`}
      >
        <img src={user.profilePic} alt="avatar" className="w-9 h-9  rounded-full " />
        <span
          className={`w-2 h-2 rounded-full absolute top-2 right-2 ${
            isOnline ? "bg-green-500" : "bg-red-500"
          } `}
        ></span>
      </div>
    </div>
  );
};

export default UserCompact;
