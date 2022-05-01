import { configureStore } from '@reduxjs/toolkit';
import { authenticateUser } from './slice/loginSlice';


export const store = configureStore({
  reducer: {
    auth: authenticateUser
  }
})

export type AppDispatch = typeof store.dispatch;