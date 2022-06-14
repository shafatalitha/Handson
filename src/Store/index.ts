import { configureStore } from "@reduxjs/toolkit";

import queryReducer from "./queryReducer";

const store = configureStore({
  reducer: {
    query: queryReducer
    // results:resultreducer
  }
  // devTools: true
});
export type TRootState = ReturnType<typeof store.getState>
export default store;
