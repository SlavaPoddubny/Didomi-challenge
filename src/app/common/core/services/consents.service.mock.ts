import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ConsentRead } from '@share/models/consent.model';

@Injectable()
export class ConsentsServiceMock {
  consent: ConsentRead = {
    id: 0,
    name: 'Slava P',
    email: 'kainsp92@gmail.com',
    consentsGivenFor: 'Recieive newsletter, Be shown targeted ads, Contribute to anonymous visit statistics'
  };

  getConsents(): Observable<ConsentRead[]> {
    return of([this.consent]);
  }

  createNewConsent(consent: ConsentRead): Observable<any> {
    return of();
  }

  removeConsent(id: number): Observable<any> {
    return of();
  }
}
