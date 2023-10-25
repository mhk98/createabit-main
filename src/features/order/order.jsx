import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productOrderApi = createApi({
  reducerPath: "productCartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://createabit-backend.onrender.com/api/v1/",
    // baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["orders"], // Define the tag type
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (product) => ({
        url: "/order/create-order",
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["orders"],
    }),

    getAllOrder: build.query({
      query: () => ({
        url: "/order",
      }),
      providesTags: ["orders"],

      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrderQuery } = productOrderApi;
