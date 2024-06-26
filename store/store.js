import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);
