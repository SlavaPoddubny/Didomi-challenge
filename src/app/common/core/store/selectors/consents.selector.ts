import { createSelector } from '@ngrx/store';

// module store
import { getConsentsModuleStore, ConsentsModuleStore, consentsModuleStoreInitialState } from '../reducers';

// reducer
import * as consentsReducer from '../reducers/consents.reducer';

export const getConsentsState =
  createSelector(
    getConsentsModuleStore,
    (state: ConsentsModuleStore = consentsModuleStoreInitialState) => state.consents
  );

// data
export const getConsents = createSelector(getConsentsState, consentsReducer.getConsents);
export const getConsentsTotalCount = createSelector(getConsentsState, consentsReducer.getConsentsTotalCount);

// state
export const getIsConsentsLoading = createSelector(getConsentsState, consentsReducer.getIsConsentsLoading);
