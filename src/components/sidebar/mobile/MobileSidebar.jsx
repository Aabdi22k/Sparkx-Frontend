import React, { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion as Motion } from "motion/react";
import User from "../../user/User"; // Update this import path based on your project structure
import Tooltip from "../../Tooltip";
const MobileSidebar = ({ isSidebarOpen, toggleSidebar, users }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toggleSidebar(); // Close when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen, toggleSidebar]);

  return (
    <>
      {/* Hamburger Icon */}
      
        <div
          onClick={toggleSidebar}
          className="flex md:hidden cursor-pointer flex-row justify-center items-center rounded-lg p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
        >
          <Tooltip text={"Open Sidebar"} position="bottom" ><Menu /></Tooltip>
        </div>
      
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-30 backdrop-brightness-[40%] md:hidden">
          <Motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            ref={sidebarRef}
            className="fixed top-4 left-4 bottom-4 w-[280px] rounded-2xl dark:border-neutral-600 border-neutral-300 border-1 dark:bg-neutral-800 bg-neutral-200 z-40 px-2 pt-4 flex flex-col"
          >
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex flex-col gap-4 overflow-hidden">
                <div className="flex flex-row pl-2 items-center gap-16">
                  <div
                    onClick={toggleSidebar}
                    className="rounded-lg cursor-pointer p-2 dark:hover:bg-neutral-700 hover:bg-neutral-300"
                  >
                    <X size={20} />
                  </div>
                  <h1 className="font-semibold">All Chats</h1>
                </div>

                <hr className="w-full h-px bg-crimson border-none" />

                <div className="flex h-full overflow-y-auto flex-col gap-2">
                  {users.map((user) => (
                    <User
                      key={user._id}
                      user={user}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      )}
    </>
  );
};

export default MobileSidebar;
