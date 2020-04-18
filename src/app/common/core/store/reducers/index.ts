import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromConsents from './consents.reducer';

export interface ConsentsModuleStore {
  consents: fromConsents.ConsentsState;
}

export const consentsModuleStoreInitialState: ConsentsModuleStore = {
  consents: fromConsents.initialState
};

export const reducers: ActionReducerMap<ConsentsModuleStore> = {
  consents: fromConsents.reducer
};

export const getConsentsModuleStore = createFeatureSelector<ConsentsModuleStore>('consents');
