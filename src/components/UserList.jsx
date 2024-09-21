import React from "react";
import User from "./User.jsx";
import useGetMyConversations from "../hooks/useGetMyConversations.js";

const UserList = () => {
  const { users } = useGetMyConversations();
  return (
    <div className="w-full flex flex-col overflow-y-auto no-scrollbar h-full space-y-3 ">
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
