import cartSlice from "@/Redux-Thunk/reducers/cartSlice";
import { productCartApi } from "@/features/cart/cart";
import { productCheckoutApi } from "@/features/order/order";
import { productPaymentApi } from "@/features/payment/payment";
import { productCategory1Api } from "@/features/product/productCategory1";
import { productCategory2Api } from "@/features/product/productCategory2";
import { productCategory3Api } from "@/features/product/productCategory3";
import { productsApi } from "@/features/product/products";
import { serviceApi } from "@/features/service/serviceApi";
import { serviceDetailsApi } from "@/features/service/serviceDetailsApi";
import thunk from "redux-thunk";

// import serviceDetailsSlice from "@/features/serviceDetails/serviceDetailsSlice";
// import servicesSlice from "@/features/services/servicesSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
    [serviceDetailsApi.reducerPath]: serviceDetailsApi.reducer,
    [productCategory1Api.reducerPath]: productCategory1Api.reducer,
    [productCategory2Api.reducerPath]: productCategory2Api.reducer,
    [productCategory3Api.reducerPath]: productCategory3Api.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [productCartApi.reducerPath]: productCartApi.reducer,
    [productCheckoutApi.reducerPath]: productCheckoutApi.reducer,
    [productPaymentApi.reducerPath]: productPaymentApi.reducer,

    // services: servicesSlice,
    // serviceDetails: serviceDetailsSlice,
    cart: cartSlice,
  },

  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      serviceApi.middleware,
      serviceDetailsApi.middleware,
      productCategory1Api.middleware,
      productCategory2Api.middleware,
      productCategory3Api.middleware,
      productsApi.middleware,
      productCartApi.middleware,
      productCheckoutApi.middleware,
      productPaymentApi.middleware,
      thunk
    ),
});

export default store;
