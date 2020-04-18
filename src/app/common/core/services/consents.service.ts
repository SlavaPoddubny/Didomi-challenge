import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';

import { ConsentRead } from '@share/models/consent.model';

@Injectable()
export class ConsentsService {
  constructor(private http: HttpClient) { }

  // added { observe: 'response' } to get full response which provide total count of items in the list
  getConsents(params: { pageIndex: number, pageSize: number }): Observable<HttpResponse<ConsentRead[]>> {
    return this.http.get<ConsentRead[]>(`${environment.apiUrl}/consents?_page=${params.pageIndex}&_limit=${params.pageSize}`,
      { observe: 'response' });
  }

  createNewConsent(consent: ConsentRead): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/consents`, consent);
  }

  removeConsent(id: number): Observable<any> {
    return this.http.request<any>('DELETE', `${environment.apiUrl}/consents/${id}`);
  }
}
