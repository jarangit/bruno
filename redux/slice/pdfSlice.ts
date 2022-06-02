import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface Data {
  data: any
  startDate: any;
  endDate: any;
  total: number;
  userName: string;
  address: string;
}

// Define the initial state using that type

const initialState: Data = {
  data: null,
  startDate: '',
  endDate: '',
  total: 0,
  userName: '',
  address: '',
}

export const pdfSlice = createSlice({
  name: 'pdfData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    keepDataPdf: (state: any, action: PayloadAction<number>) => {
      state.data = action.payload
    },
    keepStartDate: (state: any, action: PayloadAction<number>) => {
      state.startDate = action.payload
    },
    keepEndDate: (state: any, action: PayloadAction<number>) => {
      state.endDate = action.payload
    },
    keepUserName: (state: any, action: PayloadAction<number>) => {
      state.userName = action.payload
    },
    keepTotal: (state: any, action: PayloadAction<number>) => {
      state.total = action.payload
    },
    keepAddress: (state: any, action: PayloadAction<number>) => {
      state.address = action.payload
    },
  },
})

export const {
  keepDataPdf,
  keepStartDate,
  keepEndDate,
  keepUserName,
  keepTotal,
  keepAddress,
} = pdfSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default pdfSlice.reducer