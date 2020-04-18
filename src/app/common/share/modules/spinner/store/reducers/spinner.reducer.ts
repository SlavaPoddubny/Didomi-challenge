import { SpinnerActions, SpinnerActionTypes } from '../actions/spinner.action';

export interface SpinnerState {
  // state
  isVisibleOnModuleLoading: boolean;
}

export const initialState: SpinnerState = {
  // state
  isVisibleOnModuleLoading: false
};

export function reducer(state = initialState, action: SpinnerActions): SpinnerState {
  switch (action.type) {
    case SpinnerActionTypes.ShowOnModuleLoading: {
      return {
        ...state,
        isVisibleOnModuleLoading: true,
      };
    }
    case SpinnerActionTypes.HideAfterModuleLoaded: {
      return {
        ...state,
        isVisibleOnModuleLoading: false,
      };
    }
  }
  return state;
}

// state
export const isVisibleOnModuleLoading = (state: SpinnerState) => state.isVisibleOnModuleLoading;
