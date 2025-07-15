import React, { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";
import Tooltip from "../Tooltip";
import User from "../user/User";
const SearchModal = ({ users }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    
  };

  const filteredUsers = users.filter((user) =>
    user.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Trigger Button */}
      <Tooltip text={"Search All Chats"} position="bottom">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer rounded-lg items-center flex p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
        >
          <Search size={20} />
        </div>
      </Tooltip>

      {/* Modal with animation */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 flex m items-center overflow-hidden justify-center bg-black/40 z-50">
            <Motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="dark:bg-neutral-800 bg-neutral-200 dark:border-neutral-600 border border-neutral-300 p-6 rounded-xl w-[400px] md:w-[720px] h-[480px] overflow-hidden"
            >
              <div className="flex flex-col w-full h-full gap-6 overflow-hidden">
                <div className="flex items-center justify-center flex-row gap-6 w-full">
                  <div className="flex items-center gap-3 border dark:border-neutral-500 border-neutral-400 rounded-xl w-full dark:bg-neutral-700 bg-neutral-200 px-4 py-3">
                    <Search size={20} />
                    <input
                      type="text"
                      placeholder="Search Chats"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      className="bg-transparent outline-none w-full text-sm text-black dark:text-white placeholder:text-neutral-500"
                    />
                  </div>
                  <div
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer rounded-lg items-center flex h-fit p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
                  >
                    <X size={20} />
                  </div>
                </div>

                <div className="flex h-full w-full overflow-y-auto flex-col gap-4">
                  {filteredUsers.map((filteredUser) => (
                    <User
                      key={filteredUser._id}
                      user={filteredUser}
                    />
                  ))}
                </div>
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchModal;
