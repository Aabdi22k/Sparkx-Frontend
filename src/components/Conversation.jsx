import React, { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import useGetMessages from "../hooks/useGetMessages.js";
import useListenMessages from "../hooks/useListenMessages.js";

const Conversation = () => {
  const { messages } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className=" py-6 w-full h-full no-scrollbar flex-1 max-h-100  overflow-auto space-y-6">
      {messages?.length === 0 ? (
        <div className="text-center text-gray-500">
          Start The Conversation Now
        </div>
      ) : (
        messages?.map((message) => (
          <div ref={lastMessageRef} key={message._id}>
            <Message message={message} />
          </div>
        ))
      )}
    </div>
  );
};

export default Conversation;
