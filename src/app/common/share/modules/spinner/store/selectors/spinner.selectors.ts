import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromSpinner from '../reducers/spinner.reducer';

export const getSpinnerSelector = createSelector(
  fromFeature.getSpinnerModuleStore,
  (state: fromFeature.SpinnerModuleStore) => state.spinner,
);

// state
export const isVisibleOnModuleLoading = createSelector(getSpinnerSelector, fromSpinner.isVisibleOnModuleLoading);
