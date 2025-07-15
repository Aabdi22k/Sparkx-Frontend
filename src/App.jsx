import React, { useState } from 'react'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from "./context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}


function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const { authUser } = useAuthContext();
  return (
    <div className={`font-sans ${theme}`}>
      <Routes>
        <Route path="/" element={authUser ? <Home toggleTheme={toggleTheme} /> : <Navigate to={'/login'} />} />
        <Route path="/signup" element={authUser ? <Navigate to={'/'} /> : <SignUp toggleTheme={toggleTheme} />} />
        <Route path="/login" element={authUser ? <Navigate to={'/'} /> : <Login toggleTheme={toggleTheme} />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </div>
  )
}

export default App

