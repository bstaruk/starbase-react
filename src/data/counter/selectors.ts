import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'data/store';
import { initialState, sliceKey } from './slice';

const selectDomain = (state: RootState) => state[sliceKey] || initialState;

export const selectCount = createSelector([selectDomain], state => state.value);
