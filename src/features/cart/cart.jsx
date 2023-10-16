import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCartApi = createApi({
  reducerPath: "productCartApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://createabit-backend.onrender.com/api/v1/",
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  tagTypes: ["carts"],
  endpoints: (builder) => ({
    createCart: builder.mutation({
      query: (product) => ({
        url: "/cart/create-cart",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["carts"],

    }),

    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["carts"],

    }),

    getAllCart: builder.query({
      query: () => ({
        url: "/cart",
      }),
      refetchOnMountOrArgChange: true,
      pollingInterval: 1000,
      provideTags: ["carts"],
    }),
  }),
});

export const {
  useCreateCartMutation,
  useGetAllCartQuery,
  useDeleteCartMutation,
} = productCartApi;
