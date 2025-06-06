import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { buyerApi } from "../services/buyer/buyerApi";

export const store = configureStore({
  reducer: {
    [buyerApi.reducerPath]: buyerApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(buyerApi.middleware),
});

setupListeners(store.dispatch);
