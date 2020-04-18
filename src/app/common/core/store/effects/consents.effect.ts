import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { map as lodashMap, filter as lodashFilter, join } from 'lodash-es';

import { ConsentsService } from '@core/services/consents.service';
import { ConsentRead } from '@share/models/consent.model';

import * as consentsActions from '../actions/consents.actions';
import { ConsentsModuleStore } from '../reducers';

@Injectable()
export class ConsentsEffect {
  constructor(
    private actions$: Actions,
    private consentsService: ConsentsService,
    private store: Store<ConsentsModuleStore>,
    private router: Router
  ) { }

  @Effect()
  loadConsents$ = this.actions$.pipe(
    ofType<consentsActions.LoadConsents>(consentsActions.ConsentsActionTypes.LoadConsents),
    switchMap(action =>
      this.consentsService.getConsents(action.payload)
        .pipe(
          // imitate request time to server
          delay(500),
          map((res: HttpResponse<ConsentRead[]>) =>
          // 'x-total-count' - specific header to get total numberof items (json-server)
            new consentsActions.LoadConsentsSucceeded({ consents: res.body, totalCount: Number(res.headers.get('x-total-count')) })),
          catchError(error => of(new consentsActions.LoadConsentsFailed(error)))
        )
    )
  );

  @Effect({ dispatch: false })
  createNewConsent$ = this.actions$.pipe(
    ofType<consentsActions.CreateNewConsent>(consentsActions.ConsentsActionTypes.CreateNewConsent),
    switchMap(action => {
      const newConsent = {
        // generate random id
        id: Math.floor(Math.random() * 100),
        name: action.payload.name,
        email: action.payload.email,
        // convert checked consents to string line
        consentsGivenFor: join(lodashMap(lodashFilter(action.payload.consentsGivenFor, ['checked', true]), 'label'), ', ')
      };

      return this.consentsService.createNewConsent(newConsent)
        .pipe(
          // imitate request time to server
          delay(500),
          map(() => {
            // navigate to list page
            this.router.navigate(['/consents']);
          }),
          catchError(error => of(error))
        );
    })
  );

  @Effect({ dispatch: false })
  removeConsent$ = this.actions$.pipe(
    ofType<consentsActions.RemoveConsent>(consentsActions.ConsentsActionTypes.RemoveConsent),
    switchMap((action) => {
      return this.consentsService.removeConsent(action.payload.id)
        .pipe(
          // imitate request time to server
          delay(500),
          map(() => {
            // load data after remove
            this.store.dispatch(new consentsActions.LoadConsents({
              pageIndex: 0,
              pageSize: action.payload.pageSize
            }));
          }),
          catchError(error => of(error))
        );
    })
  );
}
