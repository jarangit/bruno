import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setTokens } from "../../service/service";
import axios from "axios";
export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken?: string;
}
const initialState: IAuthentication = { isProcessingRequest: false };
export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});
export const authenticateUser = (userData: any) => async (dispatch: any) => {
  console.log(userData);
  console.log({ "this url": process.env.API_URL });

  try {
    const { email, password } = userData;
    const register = axios.post("https://api.airin1.com/api/" + "login", {
      email: email,
      password: password,
    }).then(res => {
      const {token} = res.data
      console.log(res.data);
      
      setTokens(res.data);
      // dispatch(success(res.data));
    })
    console.log(register);
    
  // history.push('/v1');
} catch (err) {
  console.log(err);
  
  // dispatch(error(err));
}
};


export const { start, success, error } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;

// function authenticate(userData: any) {
//   throw new Error("Function not implemented.");
// }
// function setTokens(data: any) {
//   throw new Error("Function not implemented.");
// }
