import React from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import { useGetOneUsersQuery } from "../features/apiSlice";
import Error404 from "./404";

const UsersDetail = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOneUsersQuery(id);
  const theData = data && data.data;
  const navigate = useNavigate();

  return (
    <div className="h-screen ">
      <Navbar />
      {/* {isError && } */}
      {isLoading ? (
        <span className="loading loading-spinner w-20 flex mx-auto pt-48"></span>
      ) : isError ? (
        <Error404 />
      ) : (
        <>
          <div className="font-bold text-xl text-center pt-5 md:text-3xl md:pt-8">
            User Detail
          </div>
          <div className="w-[350px] md:w-[500px] mx-auto pt-4 md:pt-8 flex flex-col md:flex-row gap-3 text-white">
            <div className="mx-auto">
              <img src={theData && theData.avatar} className="w-[200px] " />
            </div>
            <div className="flex flex-col gap-2 pt-4 md:pt-0">
              <div className="flex flex-col">
                <span className="font-bold italic">First Name:</span>
                <span>{theData && theData.first_name}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold italic">Last Name:</span>
                <span>{theData && theData.last_name}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold italic">Email: </span>
                <span>{theData && theData.email}</span>
              </div>
            </div>
          </div>
          <div className="text-center pt-10 md:pt-20">
            <button
              className="font-bold hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/users")}
            >
              BACK
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UsersDetail;
