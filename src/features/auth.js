import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const auth = createApi({
  reducerPath: "auth",
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
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = auth;
