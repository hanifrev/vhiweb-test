import axios from "axios";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth";
// import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, isError }] = useLoginMutation();

  const base_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password })
      .unwrap()
      .then((res) => {
        console.log(res);
        // dispatch(name(res.data.data.name));
        Cookies.set("access_token", res);
        navigate("/users");
      })
      .catch((error) => {
        console.error("error >>>", error);
        // alert(error.response.data.error);
      });
  };

  return (
    <div id="login" className="h-screen">
      <div className="pt-10 pb-[138px]"></div>
      <div className="loginForm w-[340px] sm:w-[448px]">
        <div className="welcome pt-6 text-center font-black text-[#34174a] text-3xl">
          Login
        </div>
        <form className="pt-12 flex flex-col items-center text-black">
          <input
            className="email text-sm"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="pass text-sm mt-3"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`btn mt-12 ${
              !email || !password
                ? "bg-[#B9B9B9] flex"
                : "bg-[#3163ce] hover:bg-[#3f93e1] flex"
            }`}
            disabled={!email || !password}
            onClick={handleLogin}
          >
            <p>Login</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
