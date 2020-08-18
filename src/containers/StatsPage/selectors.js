import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectStatsPageDomain = (state) => state.statsPage || initialState;

export const selectRepoDetails = () =>
  createSelector(selectStatsPageDomain, (substate) => substate.repoDetails);

export const selectRepoDetailsLoaded = () =>
  createSelector(
    selectStatsPageDomain,
    (substate) => substate.repoDetailsLoaded,
  );

export const selectRepoDetailsError = () =>
  createSelector(
    selectStatsPageDomain,
    (substate) => substate.repoDetailsError,
  );
