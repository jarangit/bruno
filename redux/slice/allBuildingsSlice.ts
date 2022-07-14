import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFromStorage } from '../../utills'

// Define a type for the slice state
interface CounterState {
  data: any
  currentBuilding: any
  floorID: any;
  roomID: any;
  twoLevel: any;
}

// Define the initial state using that type

const initialState: CounterState = {
  data: [],
  currentBuilding: 0,
  floorID: 0,
  roomID: 0,
  twoLevel: null
}

export const allBuildingsSlice = createSlice({
  name: 'allBuildings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    keepData: (state: any, action: PayloadAction<number>) => {
      state.data = action.payload
    },
    currentBuilding: (state: any, action: PayloadAction<number>) => {
      state.currentBuilding = action.payload
    },
    currentFloorID: (state: any, action: PayloadAction<number>) => {
      state.floorID = action.payload
    },
    currentRoomID: (state: any, action: PayloadAction<number>) => {
      state.roomID = action.payload
    },
    twoLevel: (state: any, action: PayloadAction<number>) => {
      console.log('%cMyProject%cline:40%caction', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(248, 214, 110);padding:3px;border-radius:2px', action)
      state.twoLevel = action.payload
    },
  },
})

export const { keepData, currentBuilding, currentRoomID, currentFloorID, twoLevel
} = allBuildingsSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default allBuildingsSlice.reducer