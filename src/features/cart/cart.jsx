import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCartApi = createApi({
  reducerPath: "productCartApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://createabit-backend.onrender.com/api/v1/",
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (product) => ({
        url: "/cart/create-cart",
        method: "POST",
        body: product,
      }),
    }),
    getAllCart: builder.query({
      query: () => ({
        url: "/cart",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateCartMutation, useGetAllCartQuery } = productCartApi;
