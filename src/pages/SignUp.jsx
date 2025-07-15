import React, { useState } from "react";
import signupimage from "../assets/signupimage.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Sun } from "lucide-react";
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
  IconBrandGithubFilled,
  IconBrandMeta,
} from "@tabler/icons-react";
import Tooltip from "../components/Tooltip";
import useAuth from "../hooks/useAuth.js";

const SignUp = ({ toggleTheme }) => {
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
    <div className="bg-white  dark:bg-black h-screen w-full flex flex-row dark:text-white text-black">
      <div className="absolute top-4 right-4">
        <Tooltip text={"Light/Dark Mode Toggle"} position="left">
          <div
            onClick={toggleTheme}
            className="cursor-pointer rounded-lg items-center flex p-2 hover:dark:bg-neutral-700 hover:bg-neutral-300"
          >
            <Sun size={20} />
          </div>
        </Tooltip>
      </div>
      <div className=" w-1/2 hidden lg:flex justify-center items-center">
        <img src={signupimage} alt="cool stuff" />
      </div>
      <div className=" lg:w-1/2 w-full flex flex-col justify-center items-center gap-16">
        <div className="flex flex-row justify-center items-center gap-4">
          <img src={logo} alt="logo" />
          <p className="font-comfortaa font-bold text-xl ">Sparkx</p>
        </div>
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <div className="flex flex-row justify-center items-center gap-4 lg:gap-8 ">
          <Tooltip text={"Apple Signup"} position="bottom">
            <div className="border-2 border-neutral-300 dark:border-neutral-600 bg-neutral-100 dark:bg-neutral-900  rounded-xl p-4 ">
              <IconBrandAppleFilled />
            </div>
          </Tooltip>
          <Tooltip text={"Github Signup"} position="bottom">
            <div className="border-2 border-neutral-300 dark:border-neutral-600  bg-neutral-100 dark:bg-neutral-900  rounded-xl p-4 ">
              <IconBrandGithubFilled />
            </div>
          </Tooltip>
          <Tooltip text={"Google Signup"} position="bottom">
            <div className="border-2 border-neutral-300 dark:border-neutral-600  bg-neutral-100 dark:bg-neutral-900  rounded-xl p-4 ">
              <IconBrandGoogleFilled />
            </div>
          </Tooltip>
          <Tooltip text={"Meta Signup"} position="bottom">
            <div className="border-2 border-neutral-300 dark:border-neutral-600  bg-neutral-100 dark:bg-neutral-900  rounded-xl p-4 ">
              <IconBrandMeta />
            </div>
          </Tooltip>
        </div>
        <form className="flex w-full flex-col justify-center items-center gap-8">
          <div className="flex w-full flex-col justify-center items-center gap-8">
            <input
              className="w-[320px] lg:w-[400px] px-6 py-4 rounded-xl outline-none border-neutral-300 dark:border-neutral-600 border-2 bg-neutral-100 dark:bg-neutral-900 dark:placeholder:text-neutral-400 placeholder:text-neutral-600"
              id="fullname"
              type="text"
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
              placeholder="Full Name"
              required
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            />
            <input
              className="w-[320px] lg:w-[400px] px-6 py-4 rounded-xl outline-none border-neutral-300 dark:border-neutral-600 border-2 bg-neutral-100 dark:bg-neutral-900 dark:placeholder:text-neutral-400 placeholder:text-neutral-600"
              id="username"
              type="text"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              placeholder="Username"
              required
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            />
            <input
              className="w-[320px] lg:w-[400px] px-6 py-4 rounded-xl outline-none border-neutral-300 dark:border-neutral-600 border-2 bg-neutral-100 dark:bg-neutral-900 dark:placeholder:text-neutral-400 placeholder:text-neutral-600"
              id="password"
              type="password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              placeholder="Password"
              required
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            />
            <input
              className="w-[320px] lg:w-[400px] px-6 py-4 rounded-xl outline-none border-neutral-300 dark:border-neutral-600 border-2 bg-neutral-100 dark:bg-neutral-900 dark:placeholder:text-neutral-400 placeholder:text-neutral-600"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>

          <div className="flex w-full flex-col justify-center items-center gap-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="cursor-pointer w-[320px] lg:w-[400px] px-6 p-3 rounded-xl text-center text-white bg-crimson"
            >
              Sign Up
            </button>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Already Have an Account{" "}
              <Link to={"/login"} className="text-crimson">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
