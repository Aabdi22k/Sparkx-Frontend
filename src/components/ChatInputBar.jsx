import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.svg";
import addCircle from "../assets/addCircle.svg";
import useSendMessage from "../hooks/useSendMessage.js";

const ChatInputBar = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full text-n2 bg-n5 flex justify-between py-3 px-6 mx-4 rounded-lg"
    >
      <img src={addCircle} width="20px" alt="" />
      <input
        placeholder="Start Typing Here"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mx-6  placeholder-n4 placeholder:text-xs flex-grow outline-none bg-transparent"
      ></input>

      <button className=" p-2 bg-crimson rounded-lg grid place-content-center">
        <img src={arrowUp} width="16px" height="16px" alt="" />
      </button>
    </form>
  );
};

export default ChatInputBar;
