import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import thunkMiddleware from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import buildingReducer from "./slice/buildingSlice";
import buildingListReducer from "./slice/buildingListSlice";
import allBuildingsReducer from "./slice/allBuildingsSlice";
import pdfDataReducer from './slice/pdfSlice'
import { createWrapper } from "next-redux-wrapper";
import userListByFloorIDReducer from './slice/userListByFloorID'
const store = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      building: buildingReducer,
      buildingList: buildingListReducer,
      allBuildings: allBuildingsReducer,
      pdfData: pdfDataReducer,
      userListByFloorID: userListByFloorIDReducer,
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