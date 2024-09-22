import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY } from "../config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://api.weatherapi.com/v1`,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchData: builder.query({
      query: (path) => ({
        url: `${path}&key=${API_KEY}`,
      }),
    }),
  }),
});

export const { useFetchDataQuery, usePostDataMutation } = apiSlice;
