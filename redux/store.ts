import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import thunkMiddleware from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import buildingReducer from "./slice/buildingSlice";
import { createWrapper } from "next-redux-wrapper";
const store = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      building: buildingReducer,
    },
    middleware: [thunkMiddleware],
  });

// type RootState = ReturnType<typeof store.getState>;
// type AppDispath = typeof store.dispatch;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useAppDispatch = () => useDispatch<AppDispath>();

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(store);