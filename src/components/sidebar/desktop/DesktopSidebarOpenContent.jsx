import React from "react";
import User from "../../user/User";

import { X } from "lucide-react";
const DesktopSidebarOpenContent = ({ users, toggleSidebar }) => {
  return (
    <div className="flex flex-col overflow-hidden justify-between gap-4">
  <div className="overflow-hidden flex flex-col justify-center gap-4">
    <div className="flex flex-row pl-2 items-center gap-16">
      <div
        onClick={toggleSidebar}
        className="cursor-pointer rounded-lg items-center flex p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
      >
        <X size={20} />
      </div>

      <h1 className="font-semibold">All Chats</h1>
    </div>
    <hr className="w-full h-px dark:bg-crimson bg-red-500 border-none" />

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

  );
};

export default DesktopSidebarOpenContent;
