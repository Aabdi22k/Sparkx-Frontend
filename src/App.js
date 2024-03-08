import { Route, Routes } from "react-router-dom";
import Login from './pages/Login.jsx'
import SignUp from "./pages/SignUp.jsx";
import Home from "./pages/Home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className="p-6 overflow-hidden bg-n7 w-full h-svh">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
