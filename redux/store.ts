import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice'
import thunkMiddleware from 'redux-thunk';
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;