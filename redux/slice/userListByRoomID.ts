import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

export const getUserListByRoomID = createAsyncThunk(
  "userListByRoomID",
  async (allID: { buildingID: string, roomID: string}, store) => {
    console.log('%cMyProject%cline:7%callID', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(217, 104, 49);padding:3px;border-radius:2px', allID)
    const {buildingID, roomID} = allID;
    try {

      const token = localStorage.getItem("token");

      if (token && buildingID && roomID) {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_APP_URL + `tenants?building_id=${buildingID}&room_id=${roomID}`,
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

const userListByRoomIDSlice = createSlice({
  name: "userListByRoomID",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserListByRoomID.pending, (state) => {
      state.loading = true;
      state.error = "";
    }),
      builder.addCase(getUserListByRoomID.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.status = true;
        state.error = "";
      }),
      builder.addCase(getUserListByRoomID.rejected, (state) => {
        state.data = null;
        state.loading = false;
        state.error = "ไม่เจอข้อมูล";
        state.status = false;
      });
  },
});

// export const { signout } = buildingSlice.actions

export default userListByRoomIDSlice.reducer;
