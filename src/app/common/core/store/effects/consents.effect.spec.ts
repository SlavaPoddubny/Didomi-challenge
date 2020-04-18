import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { configureTestSuite } from 'ng-bullet';

import { ReplaySubject } from 'rxjs';

import { MockStore } from '@share/testing/mock-store';

// dependencies
import { ConsentsEffect } from './consents.effect';
import { initialState } from '../reducers/consents.reducer';

// store
import * as fromConsentsStore from '../index';

// action
import * as consentsActions from '../actions/consents.actions';

// services
import { ConsentsService } from '@core/services/consents.service';
import { ConsentsServiceMock } from '@core/services/consents.service.mock';

import { ConsentReadMock, ConsentWriteMock } from '@share/mocks/consent.mock';

const routerStub = {
  navigate: jasmine.createSpy('navigate')
};

const pageIndex = 1;
const pageSize = 2;

describe('ConsentsEffect', () => {
  let actions$: ReplaySubject<any>;
  let effects: ConsentsEffect;
  let storeDispatchSpy: jasmine.Spy;
  let consentsService: ConsentsService;
  let consentsStore: Store<fromConsentsStore.ConsentsModuleStore>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule
      ],
      providers: [
        ConsentsEffect,
        { provide: Store, useValue: new MockStore() },
        { provide: ConsentsService, useClass: ConsentsServiceMock },
        { provide: MatSnackBar, useValue: { openFromComponent: () => {} }},
        { provide: Router, useValue: routerStub },
        provideMockStore({ initialState }),
        provideMockActions(() => actions$)
      ]
    });
  });

  beforeEach(() => {
    effects = TestBed.inject(ConsentsEffect);
    consentsService = TestBed.inject(ConsentsService);
    consentsStore = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(effects).toBeTruthy();
  });

  describe('#loadConsents$', () => {
    it('should get list of consents', () => {
      storeDispatchSpy = spyOn(consentsStore, 'dispatch');
      spyOn(consentsService, 'getConsents').and.callThrough();

      actions$ = new ReplaySubject(1);
      actions$.next(new consentsActions.LoadConsents({ pageIndex, pageSize }));

      effects.loadConsents$.subscribe(() => {
        expect(storeDispatchSpy).toHaveBeenCalledWith(
          new fromConsentsStore.LoadConsentsSucceeded({ consents: [ConsentReadMock], totalCount: 1 })
        );
      });
    });
  });

  describe('#createNewConsent$', () => {
    it('should create new consent', () => {
      storeDispatchSpy = spyOn(consentsStore, 'dispatch');
      spyOn(consentsService, 'createNewConsent').and.callThrough();

      actions$ = new ReplaySubject(1);
      actions$.next(new consentsActions.CreateNewConsent(ConsentWriteMock));

      effects.createNewConsent$.subscribe(() => {
        expect(storeDispatchSpy).toHaveBeenCalledWith(
          new consentsActions.LoadConsents({ pageIndex, pageSize })
        );
      });
    });

    it('should redirect to Consents page after create', () => {
      spyOn(consentsService, 'createNewConsent').and.callThrough();

      actions$ = new ReplaySubject(1);
      actions$.next(new consentsActions.CreateNewConsent(ConsentWriteMock));

      effects.createNewConsent$.subscribe(() => {
        expect(routerStub.navigate).toHaveBeenCalledWith(['/consents']);
      });
    });
  });

  describe('#removeConsent$', () => {
    it('should get list of consents', () => {
      storeDispatchSpy = spyOn(consentsStore, 'dispatch');
      spyOn(consentsService, 'createNewConsent').and.callThrough();

      actions$ = new ReplaySubject(1);
      actions$.next(new consentsActions.CreateNewConsent(ConsentWriteMock));

      effects.createNewConsent$.subscribe(() => {
        expect(storeDispatchSpy).toHaveBeenCalledWith(
          new consentsActions.LoadConsents({ pageIndex, pageSize })
        );
      });
    });
  });
});
