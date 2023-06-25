import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Logout your account?</h1>

            <button onClick={logout} className="signout-btn">
              Logout
            </button>
            <button onClick={onClose} className="cancels-btn">
              Cancel
            </button>
          </div>
        );
      },
    });
  };

  const logout = () => {
    setTimeout(() => {
      Cookies.remove("access_token");
      navigate("/");
      window.location.reload();
    }, 200);
  };

  return (
    <div id="navbar">
      <div className="flex flex-row  px-2 w-full justify-between max-w-[1366px] mx-auto">
        <div>
          <img
            className="logo"
            src="https://kbsproperty.co.id/wp-content/uploads/2020/09/dummy-logo-2b.png"
          />
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 text-white p-1 rounded-md text-xs md:p-2 md:text-sm"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
