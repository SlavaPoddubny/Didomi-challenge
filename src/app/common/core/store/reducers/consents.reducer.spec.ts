import {
  initialState,
  reducer,
  getConsents,
  getConsentsTotalCount,
  getIsConsentsLoading
} from './consents.reducer';

import {
  LoadConsentsFailed,
  LoadConsentsSucceeded
} from '../actions/consents.actions';

import { ConsentReadMock } from '@share/mocks/consent.mock';

const error = new Error();

describe('Consents Reducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = { type: 'SomeUndefinedAction' } as any;

      const result = reducer(undefined, action);

      expect(result).toBe(initialState);
    });
  });

  describe('[Consents List] Load Team Succeeded', () => {
    it('should add @consents to state', () => {
      const action = new LoadConsentsSucceeded(ConsentReadMock as any);

      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        consents: {
          data: action.payload.consents,
          totalCount: action.payload.totalCount,
          loading: false,
          loaded: true,
          error: false
        }
      });
    });
  });

  describe('[Consents List] Load Consents Failed', () => {
    it(`should set @loaded and @error states to 'true'`, () => {
      const action = new LoadConsentsFailed(error);

      const result = reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        consents: {
          ...initialState.consents,
          loading: false,
          loaded: true,
          error: true
        }
      });
    });
  });

  describe('Reducer get data functions', () => {
    describe('#getConsents', () => {
      it('should get @consents data', () => {
        const expected = initialState.consents.data;

        const actual = getConsents(initialState);

        expect(actual).toEqual(expected);
      });
    });

    describe('#getConsentsTotalCount', () => {
      it('should get @consents totalCount', () => {
        const expected = initialState.consents.totalCount;

        const actual = getConsentsTotalCount(initialState);

        expect(actual).toEqual(expected);
      });
    });

    describe('#getIsConsentsLoading', () => {
      it('should get @consents isLoading', () => {
        const expected = initialState.consents.loading;

        const actual = getIsConsentsLoading(initialState);

        expect(actual).toEqual(expected);
      });
    });
  });
});
