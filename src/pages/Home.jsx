import React, { useState, useEffect, useRef } from "react";

import logo from "../assets/logo.png";

import { Sun, LogOut, SendHorizonal, Plus } from "lucide-react";

import DesktopSidebar from "../components/sidebar/desktop/DesktopSidebar";
import SearchModal from "../components/modals/SearchModal";
import AddUserModal from "../components/modals/AddUserModal";
import MobileSidebar from "../components/sidebar/mobile/MobileSidebar";
import Tooltip from "../components/Tooltip";

import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth.js";
import useGetUsers from "../hooks/useGetUsers.js";
import useGetMessages from "../hooks/useGetMessages.js";
import useListenMessages from "../hooks/useListenMessages.js";
import useSendMessage from "../hooks/useSendMessage.js";
import useGetMyConversations from "../hooks/useGetMyConversations.js";
import useConversation from "../store/useConversation.js";
import { useAuthContext } from "../context/AuthContext";

const Home = ({ toggleTheme }) => {
  const { authUser } = useAuthContext();
  const { logout } = useAuth();
  const { sendMessage } = useSendMessage();
  const { users } = useGetMyConversations();
  const { users: allUsers } = useGetUsers();
  const { messages } = useGetMessages();
  const { selectedConversation, setSelectedConversation } = useConversation();

  useListenMessages();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = async () => {
    if (!newMessage) return;
    await sendMessage(newMessage);
    setNewMessage("");
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const messagesEndRef = useRef(null); // Create a ref to scroll to the last message

  useEffect(() => {
    // Scroll to the last message whenever the messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // This effect will run whenever messages change
  // Array of user data with avatars randomly assigned

  return (
    <div
      className={`bg-white prose overflow-hidden dark:bg-black h-screen w-full flex flex-col gap-6 p-6 dark:text-white text-black`}
    >
      <div className="h-1/16 flex flex-row justify-between px-2 items-center">
        <MobileSidebar
          toggleSidebar={toggleSidebar}
          users={users}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="hidden md:flex flex-row justify-center items-center pl-2 gap-4">
          <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="logo" />
          <p className=" font-comfortaa font-bold text-xl ">Sparkx</p>
        </div>

        <div className="flex flex-row gap-2 md:gap-6 items-center ">
          <SearchModal users={users} />
          <AddUserModal allUsers={allUsers} users={users} setSelectedConversation={setSelectedConversation} />
          <Tooltip text={"Light/Dark Mode Toggle"} position="bottom">
            <div
              onClick={toggleTheme}
              className="cursor-pointer rounded-lg items-center flex p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
            >
              <Sun size={20} />
            </div>
          </Tooltip>
          <Tooltip text={"Logout"} position="bottom">
            <Link
              onClick={logout}
              className="cursor-pointer rounded-lg items-center flex p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
            >
              <LogOut size={20} />
            </Link>
          </Tooltip>
        </div>

        <div className="flex w-fit flex-row justify-end md:justify-center items-center gap-4 md:gap-6">
          <div className="flex md:px-4 rounded-lg p-2 flex-row gap-4 justify-center items-center md:dark:bg-neutral-900 md:bg-neutral-200 md:dark:border-neutral-600 md:border-neutral-300 md:border-1">
            <div className="hidden md:flex  flex-col   w-full">
              <p className="flex font-semibold ">{authUser.fullname}</p>
              <p className="flex text-xs  dark:text-neutral-400 text-neutral-600 ">
                {authUser.username}
              </p>
            </div>
            <Tooltip
              text={
                <>
                  {authUser.fullname}
                  <br />{authUser.username}
                </>
              }
              position="bottom"
            >
              <div className="flex w-10 h-10"><img src={authUser.profilePic}  alt="avatar" /></div>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="h-full overflow-hidden flex flex-row gap-6">
        <DesktopSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          users={users}
        />

        <div className="w-full dark:border-neutral-600 border-neutral-300 border-1 flex-shrink p-6 overflow-hidden dark:bg-neutral-900 bg-neutral-200 rounded-xl flex flex-col gap-6">
          {selectedConversation ? (
            <>
              {/* Messages list */}
              <div className="flex flex-col w-full max-h-full gap-2 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message._id}
                    className={`flex flex-col ${
                      message.senderId === authUser._id ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:text-md text-sm p-3 rounded-xl  ${
                        message.senderId === authUser._id
                          ? "bg-crimson text-white"
                          : "dark:bg-neutral-700 bg-neutral-300"
                      }`}
                    >
                      {message.message}
                    </div>
                    <span className="text-[0.6rem] md:text-xs text-gray-500 mt-1">
                      {message.createdat}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="flex flex-row dark:border-neutral-600 border-neutral-400 border-1 w-full justify-center rounded-xl gap-2 px-4 rounded-lg items-center dark:bg-neutral-800 bg-neutral-300">
                <Tooltip text={"Add Media"} position="bottom">
                  <Plus className="cursor-pointer" />
                </Tooltip>
                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="w-full py-4 outline-0"
                  type="text"
                  placeholder="Type a message"
                />
                <Tooltip text={"Send Message"} position="top">
                  <SendHorizonal className="cursor-pointer" onClick={handleSendMessage} />
                </Tooltip>
              </div>
            </>
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-gray-500">
                Select a conversation from the sidebar or click “+” to add other users by their username and start a new chat.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
