import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromSpinner from './spinner.reducer';

export interface SpinnerModuleStore {
  spinner: fromSpinner.SpinnerState;
}

export const reducers: ActionReducerMap<SpinnerModuleStore> = {
  spinner: fromSpinner.reducer,
};

export const getSpinnerModuleStore = createFeatureSelector<SpinnerModuleStore>('spinner');
