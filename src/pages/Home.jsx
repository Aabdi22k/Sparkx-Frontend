import React from "react";

import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import ChatBox from "../components/ChatBox.jsx";

const Home = () => {
  return (
    <div className="flex flex-row h-full gap-12 text-n2">
      <Sidebar />
      {/** Right Section */}
      <div className="min-w-100 max-w-100 flex-grow mb-28 space-y-2 ">
        <Navbar />

        <ChatBox />
      </div>
    </div>
  );
};

export default Home;
