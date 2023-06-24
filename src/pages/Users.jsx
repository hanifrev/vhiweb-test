import Cookies from "js-cookie";
import React from "react";
import Navbar from "../components/Navbar";
import UsersList from "../components/UsersList";

const Users = () => {
  return (
    <div>
      <Navbar />
      <UsersList />
    </div>
  );
};

export default Users;
