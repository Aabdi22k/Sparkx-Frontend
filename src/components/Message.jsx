import React from "react";
import { useAuthContext } from "../context/AuthContext";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  return (
    <div className={`w-fit ${fromMe ? "justify-end" : "justify-start"} flex w-full `}>
      <div className={`rounded-2xl ${fromMe ? "bg-crimson" : "bg-n5"}  p-4`}>
        {message.message}
      </div>
    </div>
  );
};

export default Message;
