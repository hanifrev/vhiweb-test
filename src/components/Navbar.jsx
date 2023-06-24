import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    Cookies.remove("access_token");
    navigate("/");
  };

  return (
    <div id="navbar">
      <div className="flex flex-row  px-2 w-full justify-between max-w-[1440px] mx-auto">
        <div>
          <img
            className="logo"
            src="https://kbsproperty.co.id/wp-content/uploads/2020/09/dummy-logo-2b.png"
          />
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 text-white p-1 rounded-md text-xs sm:p-2 sm:text-sm"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
