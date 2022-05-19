import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const buildingListAsync = createAsyncThunk(
  "buildingList",
  async (id: { id: string }, store) => {
    try {

      const token = localStorage.getItem("token");

      if (token) {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_APP_URL + `tenants?building_id=${id}`,
          {
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
  loading: true,
  error: "",
  status: false,
};

const buildingListSlice = createSlice({
  name: "buildingList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(buildingListAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(buildingListAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.status = true;
        state.error = "";
      }),
      builder.addCase(buildingListAsync.rejected, (state) => {
        state.data = null;
        state.loading = false;
        state.error = "ไม่เจอข้อมูล";
        state.status = false;
      });
  },
});

// export const { signout } = buildingSlice.actions

export default buildingListSlice.reducer;
