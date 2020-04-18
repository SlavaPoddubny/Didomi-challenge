import {
  consentsModuleStoreInitialState as initialState, getConsentsModuleStore
} from '../reducers';

import {
  getConsentsState,
  getConsents,
  getConsentsTotalCount,
  getIsConsentsLoading
} from './consents.selector';

import { ConsentReadMock } from '@share/mocks/consent.mock';

describe('Consents Selector', () => {
  beforeEach(() => {
    initialState.consents.consents.data = [ConsentReadMock];
    initialState.consents.consents.totalCount = 1;
    initialState.consents.consents.loading = true;
  });

  describe('#getConsentsState', () => {
    it('should return @consents state', () => {
      const actual = getConsentsState(getConsentsModuleStore);

      expect(actual).toEqual(initialState.consents);
    });
  });

  describe('#getConsents', () => {
    it('should set and return @consents data', () => {
      const actual = getConsents(getConsentsModuleStore);

      expect(actual).toEqual([ConsentReadMock]);
    });
  });

  describe('#getConsentsTotalCount', () => {
    it('should set and return @consents total coint', () => {
      const actual = getConsentsTotalCount(getConsentsModuleStore);

      expect(actual).toEqual(1);
    });
  });

  describe('#getIsConsentsLoading', () => {
    it('should set and return @consents isLoading', () => {
      const actual = getIsConsentsLoading(getConsentsModuleStore);

      expect(actual).toBe(true);
    });
  });
});
