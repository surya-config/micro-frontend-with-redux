import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slice";
import counterSlice from "./slice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({ reducer: rootReducer });

export function useStore() {
  const count = useSelector((state: any) => state?.counter?.count);
  const dispatch = useDispatch();

  return {
    count,
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
}

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
