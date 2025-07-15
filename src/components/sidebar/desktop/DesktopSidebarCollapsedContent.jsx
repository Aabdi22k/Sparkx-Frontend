import React from "react";
import { Menu } from "lucide-react";
import UserCompact from "../../user/UserCompact";
import Tooltip from "../../Tooltip.jsx";
const DesktopSidebarCollapsedContent = ({ users, toggleSidebar }) => {
  return (
    <div className="flex flex-col overflow-hidden justify-between gap-2">
      <div className="flex flex-col gap-2 px-2">
      <Tooltip text={"Open Sidebar"} position="top">
        <div
          onClick={toggleSidebar}
          className="rounded-lg cursor-pointer items-center flex p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
        >
          
            <Menu size={20} />
          
        </div>
        </Tooltip>
      </div>

      <hr className="h-px px-2 dark:bg-crimson bg-red-500 border-none" />
      <div className="flex h-full overflow-y-auto gap-2 flex-col">
        {users.map((user) => (
          <UserCompact
            key={user._id}
            user={user} 
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopSidebarCollapsedContent;
