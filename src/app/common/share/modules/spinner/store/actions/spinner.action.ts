import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  ShowOnModuleLoading = '[Spinner] Show On Module Loading',
  HideAfterModuleLoaded = '[Spinner] Hide After Module Is Loaded',
}

export class ShowOnModuleLoading implements Action {
  readonly type = SpinnerActionTypes.ShowOnModuleLoading;
}

export class HideAfterModuleLoaded implements Action {
  readonly type = SpinnerActionTypes.HideAfterModuleLoaded;
}

// action types
export type SpinnerActions =
  | ShowOnModuleLoading
  | HideAfterModuleLoaded;
