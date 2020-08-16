import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectHomePageDomain = (state) => state.homePage || initialState;

export const selectRepoDetails = () =>
  createSelector(selectHomePageDomain, (substate) => substate.repoDetails);

export const selectRepoDetailsLoaded = () =>
  createSelector(
    selectHomePageDomain,
    (substate) => substate.repoDetailsLoaded,
  );
