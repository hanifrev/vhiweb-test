import React, { useState } from "react";
import { useGetUsersQuery } from "../features/apiSlice";

const UsersList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetUsersQuery(page);
  const theData = data && data.data;
  console.log(theData);

  return (
    <div id="users-list" className="h-auto">
      <div className="font-bold text-xl text-center pt-5 md:text-3xl md:pt-8">
        The Users
      </div>
      {isLoading ? (
        <span className="loading loading-spinner w-20 flex mx-auto pt-48"></span>
      ) : (
        <div className=" theCard ">
          {theData &&
            theData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-row gap-3 bg-[#686767] hover:bg-[#a4a2a2] cursor-pointer rounded-xl py-1 px-2 w-full md:w-[350px] md:flex-col md:py-5 md:justify-between"
                >
                  <div className="flex items-center md:justify-center">
                    <img
                      src={item.avatar}
                      className="w-11 rounded-[50%] md:w-[150px]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="md:text-center font-bold">
                      {item.first_name} {item.last_name}
                    </div>
                    <div className="md:text-center">{item.email}</div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <div className="join flex justify-center py-10">
        <button
          className="join-item btn"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page <= 1}
        >
          «
        </button>
        <button className="join-item btn">Page {page}</button>
        <button
          className="join-item btn"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page >= 2}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default UsersList;
