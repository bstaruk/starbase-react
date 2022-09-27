import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  count: number;
}

// Define the initial state using that type
export const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {}, // eslint-disable-line
    setCountSuccess: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = counterSlice;
