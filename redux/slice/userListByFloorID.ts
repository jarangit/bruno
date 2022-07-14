import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const getUserListByFloorID = createAsyncThunk(
  "userListByFloorID",
  async (allID: { buildingID: any, floorID: any}, store) => {
    const {buildingID, floorID} = allID;
    try {

      const token = localStorage.getItem("token");

      if (token && buildingID &&floorID) {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_APP_URL + `tenants?building_id=${buildingID}&floor_id=${floorID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        
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

const userListByFloorIDSlice = createSlice({
  name: "userListByFloorID",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserListByFloorID.pending, (state) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(getUserListByFloorID.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.status = true;
        state.error = "";
      }),
      builder.addCase(getUserListByFloorID.rejected, (state) => {
        state.data = null;
        state.loading = false;
        state.error = "ไม่เจอข้อมูล";
        state.status = false;
      });
  },
});

// export const { signout } = buildingSlice.actions

export default userListByFloorIDSlice.reducer;
