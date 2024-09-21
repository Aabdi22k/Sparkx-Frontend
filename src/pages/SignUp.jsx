import React, { useState } from "react";
import signup from "../assets/signup.svg";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";
import github from "../assets/Github.svg";
import apple from "../assets/Apple.svg";
import Logo from "../components/Logo.jsx";
import useAuth from "../hooks/useAuth.js";
import { GoogleLogin } from "@react-oauth/google";

import { Link } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };
  return (
    <div className="grid grid-flow-rows   ">
      <Logo />
      <div className=" items-center grid grid-flow-col ">
        {/** Sign Up Page Illustration */}
        <div className="flex flex-col items-center">
          <img src={signup} alt="Sign Up Illustration" />
        </div>

        {/** Sign Up Form */}
        <div className="gap-10 size-full flex flex-col justify-center items-center">
          {/** Title & Social Buttons */}
          <div className="w-full gap-8 flex flex-col justify-center items-center">
            <span className="text-n2 font-bold text-center text-4xl">
              Sign Up
            </span>

            {/** Social Sign Up Buttons */}
            <div className="flex  gap-4">
              <GoogleLogin onSuccess={signUp} onError={() => {}} />
              <img src={facebook} alt="" />
              <img src={github} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>

          {/** Username & Password Fields */}
          <form
            onSubmit={handleSubmit}
            className="gap-12 flex flex-col w-4/5 items-center  h-full"
          >
            <div className="text-n2 w-4/5 gap-10 flex-col flex   ">
              <div className=" flex gap-2  flex-col w-full">
                <input
                  value={inputs.fullname}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullname: e.target.value })
                  }
                  id="auth-input"
                  placeholder="Full Name"
                  className="border-0  placeholder-n4 placeholder:text-sm text-sm outline-none p-2 bg-transparent"
                />
                <div id="underline" className=" bg-n5 h-1 rounded-md "></div>
              </div>
              <div className=" flex gap-2 flex-col w-full">
                <input
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
                  id="auth-input"
                  placeholder="Username"
                  type="text"
                  className="border-0  placeholder-n4 placeholder:text-sm text-sm outline-none p-2 bg-transparent"
                />
                <div id="underline" className=" bg-n5 h-1 rounded-md "></div>
              </div>
              <div className=" flex gap-2 flex-col w-full">
                <input
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                  id="auth-input"
                  placeholder="Password"
                  type="password"
                  className="border-0  placeholder-n4 placeholder:text-sm text-sm outline-none p-2 bg-transparent"
                />
                <div id="underline" className=" bg-n5 h-1 rounded-md "></div>
              </div>
              <div className=" flex gap-2 flex-col w-full">
                <input
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                  id="auth-input"
                  placeholder="Confirm Password"
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
                  
          <span className="text-n2 text-center text-sm">
        Already have an account |{" "}
        <Link className="text-crimson" to={"/login"}>
          Login
        </Link>
      </span>        </div>
      </div>
    </div>
  );
};

export default SignUp;
