import React, { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { toast } from "react-hot-toast";
import Tooltip from "../Tooltip";
const AddUserModal = ({ allUsers, users, setSelectedConversation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUsername) return;
    if (newUsername.length < 3) {
      toast.error("Search must be at least 3 characters");
      return;
    }
    console.log(allUsers);
    const user = allUsers?.find((u) =>
      u.username.toLowerCase().includes(newUsername.toLowerCase())
    );

    console.log(user);

    if (user) {
      users.push(user);
      setSelectedConversation(user);
      setIsOpen(false);
      setNewUsername("");
    } else {
      toast.error("No User found");
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <Tooltip text={"Add User / Start Chat"} position="bottom">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer rounded-lg items-center flex p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
        >
          <Plus size={20} />
        </div>
      </Tooltip>

      {/* Modal with animation */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <Motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="dark:bg-neutral-800 bg-neutral-200 dark:border-neutral-600 realtive  border border-neutral-400 p-6 rounded-xl w-[360px] h-[360px]"
            >
              <div className="w-full h-full items-center relative justify-between flex text-center py-6 flex-col gap-6">
                <div
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer rounded-lg items-center absolute top-0 right-0 flex h-fit p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
                >
                  <X size={20} />
                </div>
                <div className="flex flex-col gap-6 items-center justify-center">
                  <h2 className="text-2xl text-comfortaa">Add User</h2>
                  <p className="text-sm w-4/5">
                    Enter the User ID of the person you wish to spark a
                    conversation with into the input below then click Add
                  </p>
                </div>
                <div className="flex flex-col w-full h-fit gap-6">
                  <div className="flex flex-col w-full gap-2">
                    <label className="pl-2 text-start">User ID</label>
                    <input
                      type="text"
                      id="newusername"
                      value={newUsername}
                      placeholder="Ex.Username423$"
                      onChange={(e) => setNewUsername(e.target.value)}
                      className="rounded-xl dark:bg-neutral-700 bg-neutral-200 border border-neutral-500 px-4 py-3 outline-none w-full text-sm text-black dark:text-white"
                    />
                  </div>
                  <div className="flex flex-row w-full gap-4">
                    <button  className="w-full h-10 rounded-lg dark:bg-neutral-700 bg-neutral-300 border border-neutral-500">
                      Cancel
                    </button>
                    <button onClick={handleAddUser} className="w-full h-10 rounded-lg dark:bg-crimson bg-red-500 text-white">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AddUserModal;
