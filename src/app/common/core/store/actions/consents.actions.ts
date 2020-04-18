import { Action } from '@ngrx/store';

import { ConsentRead, ConsentWrite } from '@share/models/consent.model';

export enum ConsentsActionTypes {
  LoadConsents = '[Consents List] Load Team',
  LoadConsentsSucceeded = '[Consents List] Load Team Succeeded',
  LoadConsentsFailed = '[Consents List] Load Team Failed',

  CreateNewConsent = '[Give Consent] Create New Consent',
  RemoveConsent = '[Give Consent] Remove Consent'
}

export class LoadConsents implements Action {
  readonly type = ConsentsActionTypes.LoadConsents;

  constructor(public payload: { pageIndex: number, pageSize: number }) { }
}

export class LoadConsentsSucceeded implements Action {
  readonly type = ConsentsActionTypes.LoadConsentsSucceeded;

  constructor(public payload: { consents: ConsentRead[], totalCount: number }) { }
}

export class LoadConsentsFailed implements Action {
  readonly type = ConsentsActionTypes.LoadConsentsFailed;

  constructor(public payload: any) { }
}

export class CreateNewConsent implements Action {
  readonly type = ConsentsActionTypes.CreateNewConsent;

  constructor(public payload: ConsentWrite) { }
}

export class RemoveConsent implements Action {
  readonly type = ConsentsActionTypes.RemoveConsent;

  constructor(public payload: { id: number, pageSize: number }) { }
}

export type ConsentsActions =
  | LoadConsents
  | LoadConsentsSucceeded
  | LoadConsentsFailed
  | CreateNewConsent
  | RemoveConsent;
