import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFromStorage } from '../../utills'

// Define a type for the slice state
interface CounterState {
  data: any
  currentBuilding:any
}

// Define the initial state using that type

const initialState: CounterState = {
  data: [],
  currentBuilding:0,
}

export const allBuildingsSlice = createSlice({
  name: 'allBuildings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    keepData: (state:any, action: PayloadAction<number>) => {
      state.data = action.payload
    },
    currentBuilding:(state:any, action: PayloadAction<number>) => {
      state.currentBuilding = action.payload
    },
  },
})

export const {  keepData ,currentBuilding} = allBuildingsSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default allBuildingsSlice.reducer