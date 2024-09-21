import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import React from "react";

const useGetMyConversations = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token") || null;
  if (!token) {
    toast.error("Uauthorized");
    return;
  }
  useEffect(() => {
    const getMyConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "http://localhost:3005/api/users/conversations",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        const data = await res.json();
        

        if (data.error) {
          throw new Error(data.error);
        }

        setUsers(data.users);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMyConversations();
  }, []);

  return { loading, users };
};

export default useGetMyConversations;
