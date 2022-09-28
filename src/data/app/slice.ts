import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  count: number;
}

export const initialState: AppState = {
  count: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {}, // eslint-disable-line
    setCountSuccess: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
