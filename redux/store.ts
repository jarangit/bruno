import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import thunkMiddleware from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import buildingReducer from "./slice/buildingSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    building: buildingReducer,
  },
  middleware: [thunkMiddleware],
});

type RootState = ReturnType<typeof store.getState>;
type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();