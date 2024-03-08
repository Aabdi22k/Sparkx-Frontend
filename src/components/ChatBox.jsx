import { useEffect } from 'react';
import Conversation from "./Conversation.jsx";
import ChatInputBar from "./ChatInputBar.jsx";
import messaging from "../assets/Messaging.svg";
import useConversation from "../zustand/useConversation.js";
import { useAuthContext } from "../context/AuthContext";

const ChatBox = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="bg-n6 text-n2 justify-between rounded-2xl p-6 w-full h-full flex flex-col gap-6  ">
      {!selectedConversation ? (
        NoChatSelected()
      ) : (
        <>
          <Conversation />

          <div className="w-full flex justify-center items-center max-h-28 h-full ">
            <ChatInputBar />
          </div>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="w-full text-center flex  flex-col gap-8 items-center  justify-center h-full">
      <span className="text-n2 text-3xl font-semibold">
        Welcome <span className="text-crimson">{authUser.username}</span>
      </span>
      <span className="text-n2 text-sm">Select a chat to start messaging</span>
      <img src={messaging} className="w-32" alt="" />
    </div>
  );
};

export default ChatBox;
