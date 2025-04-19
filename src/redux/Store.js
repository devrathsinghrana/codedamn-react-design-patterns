import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user";

import counterReducer from "./slices/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
