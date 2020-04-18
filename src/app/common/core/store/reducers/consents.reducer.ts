import { ConsentsActions, ConsentsActionTypes } from '../actions/consents.actions';

import { ConsentRead } from '@share/models/consent.model';

export interface ConsentsState {
  consents: {
    data: ConsentRead[];
    totalCount: number;
    loaded: boolean;
    loading: boolean;
    error: boolean;
  };
}

export const initialState: ConsentsState = {
  consents: {
    data: [],
    totalCount: 0,
    loaded: false,
    loading: false,
    error: false
  }
};

export function reducer(state = initialState, action: ConsentsActions): ConsentsState {
  switch (action.type) {
    case ConsentsActionTypes.LoadConsents: {
      return {
        ...state,
        consents: {
          data: [],
          totalCount: 0,
          loading: true,
          loaded: false,
          error: false
        }
      };
    }
    case ConsentsActionTypes.LoadConsentsSucceeded: {
      return {
        ...state,
        consents: {
          data: action.payload.consents,
          totalCount: action.payload.totalCount,
          loading: false,
          loaded: true,
          error: false
        }
      };
    }
    case ConsentsActionTypes.LoadConsentsFailed: {
      return {
        ...state,
        consents: {
          ...state.consents,
          loading: false,
          loaded: true,
          error: true
        }
      };
    }
    default:
      return state;
  }
}

// data
export const getConsents = (state: ConsentsState) => state.consents.data;
export const getConsentsTotalCount = (state: ConsentsState) => state.consents.totalCount;

// state
export const getIsConsentsLoading = (state: ConsentsState) => state.consents.loading;
