import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://68306447f504aa3c70f7a619.mockapi.io/",
  }),
  endpoints: () => ({}),
  tagTypes: ["STUDENTS"],
});

export const {} = mainApi;
