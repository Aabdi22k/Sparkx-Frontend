import React, { useState } from "react";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";
import github from "../assets/Github.svg";
import login1 from "../assets/login.svg";
import apple from "../assets/Apple.svg";
import Logo from "../components/Logo.jsx";
import useAuth from "../hooks/useAuth.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="grid grid-flow-rows   ">
      <Logo />
      <div className=" items-center grid grid-flow-col ">
        {/** Login Page Illustration */}
        <div className="flex flex-col items-center">
          <img src={login1} alt="Login Illustration" />
        </div>

        {/** Login Form */}
        <div className="gap-10 size-full flex flex-col justify-center  items-center">
          {/** Title & Social Buttons */}
          <div className="w-full gap-8 flex flex-col justify-center  items-center">
            <span className="text-n2 font-bold text-center text-4xl">
              Welcome Back!
            </span>

            {/** Social Login Buttons */}
            <div className="flex  gap-4">
              <img src={google} alt="" />
              <img src={facebook} alt="" />
              <img src={github} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>

          {/** Username & Password Fields */}
          <form
            onSubmit={handleSubmit}
            className="gap-12 flex flex-col w-4/5 items-center "
          >
            <div className="text-n2 w-4/5 gap-10 flex-col flex   ">
              <div className=" flex gap-2 flex-col w-full">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="auth-input"
                  placeholder="Username"
                  type="text"
                  className="border-0  placeholder-n4 placeholder:text-sm text-sm outline-none p-2 bg-transparent"
                />
                <div id="underline" className=" bg-n5 h-1 rounded-md "></div>
              </div>
              <div className=" flex gap-2 flex-col w-full">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="auth-input"
                  placeholder="Password"
                  type="password"
                  className="border-0  placeholder-n4 placeholder:text-sm text-sm outline-none p-2 bg-transparent"
                />
                <div id="underline" className=" bg-n5 h-1 rounded-md "></div>
              </div>
            </div>
            <button className=" w-4/5 text-n2 text-center text-sm flex  justify-center items-center rounded-md bg-crimson h-10">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
