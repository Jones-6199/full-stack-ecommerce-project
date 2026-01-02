import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (endpoint) => endpoint,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
