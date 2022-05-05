import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const buildingAsync = createAsyncThunk(
  "building",
  async (id: { id: string }, store) => {
    try {
      
      const token = localStorage.getItem("token");

      if (token) {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_APP_URL + `buildings/${id}`,
          {
            // headers: {
            //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTE3MjMzOTQsImV4cCI6MTY1NDMxNTM5NCwib3RwIjoiIiwidWlkIjo0M30.RSCEaMKYTpwETHLsmzcMwGwTvrXsgEEryGQwN0SI3bE`,
            // },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return data;
      }
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: "",
  status: false,
};
const buildingSlice = createSlice({
  name: "building",
  initialState,
  reducers: {
    // signout: (state) => {
    //   state.building = null;
    //   state.loading = true;
    //   state.error = "";
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(buildingAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(buildingAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.status = true;
        state.error = "";
      }),
      builder.addCase(buildingAsync.rejected, (state) => {
        state.data = null;
        state.loading = false;
        state.error = "ไม่เจอข้อมูล";
        state.status = false;
      });
  },
});

// export const { signout } = buildingSlice.actions

export default buildingSlice.reducer;
