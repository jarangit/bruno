import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  data: any
  currentBuilding:number
}

// Define the initial state using that type
const initialState: CounterState = {
  data: [],
  currentBuilding:38,
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