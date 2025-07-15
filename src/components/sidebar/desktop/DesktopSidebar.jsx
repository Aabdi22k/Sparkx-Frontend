import React from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import DesktopSidebarCollapsedContent from "./DesktopSidebarCollapsedContent";
import DesktopSidebarOpenContent from "./DesktopSidebarOpenContent";
const DesktopSidebar = ({ isSidebarOpen, toggleSidebar, users }) => {
  return (
    <Motion.div
      animate={{ width: isSidebarOpen ? 360 : 72 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`h-full dark:border-neutral-600 border-neutral-300 border-1 dark:bg-neutral-900 bg-neutral-200 rounded-xl overflow-hidden justify-center py-4 gap-6 flex-col 
      hidden md:flex ${isSidebarOpen ? "px-4 " : "items-center"}
    `}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isSidebarOpen ? (
          <Motion.div
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col  overflow-hidden"
          >
            <DesktopSidebarOpenContent
              users={users}
              toggleSidebar={toggleSidebar}
            />
          </Motion.div>
        ) : (
          <Motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            <DesktopSidebarCollapsedContent
              users={users}
              toggleSidebar={toggleSidebar}
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default DesktopSidebar;
