import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    // prepareHeaders: (headers) => {
    //   const token = `Bearer ${Cookies.get("access_token")}`;
    //   if (token) {
    //     headers.set("authorization", token);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => `/api/users?page=${page}`,
      providesTags: ["user"],
    }),
    getOneUsers: builder.query({
      query: (id) => ({
        url: `api/users/${id}`,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetOneUsersQuery } = api;
