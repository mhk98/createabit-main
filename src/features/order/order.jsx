import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productOrderApi = createApi({
  reducerPath: "productOrderApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://createabit-backend.onrender.com/api/v1/",
    baseUrl: "https://createabit-backend.onrender.com/api/v1/",
  }),

  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (product) => ({
        url: "/order/create-order",
        method: "POST",
        body: order,
      }),
    }),

    getAllOrder: build.query({
      query: () => ({
        url: "/order",
      }),
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrderQuery } = productOrderApi;
