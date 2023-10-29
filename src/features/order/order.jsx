import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productCheckoutApi = createApi({
  reducerPath: "productCheckoutApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1/",
    baseUrl: "http://localhost:5000/api/v1/",
  }),

  endpoints: (build) => ({
    createCheckout: build.mutation({
      query: (checkoutDetails) => ({
        url: "/checkout/create-checkout",
        method: "POST",
        body: checkoutDetails,
      }),
    }),

    getAllCheckout: build.query({
      query: () => ({
        url: "/checkout",
      }),
    }),
  }),
});

export const { useCreateCheckoutMutation, useGetAllCheckoutQuery } =
  productCheckoutApi;
