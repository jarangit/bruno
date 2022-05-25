import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const initialState = {
  user: null,
  loading: false,
  error: "",
  status: false,
};
type User = {
  email: string;
  password: string;
};
export const siginAsync = createAsyncThunk(
  "signin",
  async ({ email, password }: User, store) => {
    const cookies = new Cookies();

    try {
      const user = await axios
        .post(process.env.NEXT_PUBLIC_APP_URL + "login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data) {
            const token = res.data.token;
            cookies.set("token", token, { path: "/" });
            localStorage.setItem("token", res.data.token);
          }
          return res.data;
        });
      return user;
    } catch (error: any) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state: any) => {
      state.user = null;
      state.loading = true;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(siginAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(siginAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.status = true;
        state.error = "";
      }),
      builder.addCase(siginAsync.rejected, (state) => {
        state.user = null;
        state.loading = false;
        state.error = "อีเมล หรือ รหัสผ่าน ไม่ถูกต้อง";
        state.status = false;
      });
  },
});

export const { signout } = authSlice.actions;

export default authSlice.reducer;
