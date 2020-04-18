import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';

import { configureTestSuite } from 'ng-bullet';

import { environment } from '@environments/environment';
import { ConsentRead } from '@share/models/consent.model';
import { ConsentsService } from '@core/services/consents.service';
import { ConsentsServiceMock } from '@core/services/consents.service.mock';

const pageIndex = 1;
const pageSize = 2;

describe('ConsentsService', () => {
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ConsentsService,
        ConsentsServiceMock
      ]
    });
  });

  it('should be created', inject([ConsentsService], (service: ConsentsService) => {
    expect(service).toBeTruthy();
  }));

  describe('getConsents()', () => {
    it('should return list of consents', inject([ConsentsService, ConsentsServiceMock, HttpTestingController],
      (service: ConsentsService, mock: ConsentsServiceMock, httpMock: HttpTestingController) => {
        service.getConsents({ pageIndex, pageSize }).subscribe((data: HttpResponse<ConsentRead[]>) => {
          expect(data.body.length).toEqual(1);
        });

        const req: TestRequest = httpMock.expectOne((request: HttpRequest<ConsentRead[]>) => {
          return request.url === `${environment.apiUrl}/consents?_page=${pageIndex}&_limit=${pageSize}` && request.method === 'GET';
        });
        req.flush([mock.consent]);
        httpMock.verify();
      }));
  });

  describe('createNewConsent()', () => {
    it('should create new consent', inject([ConsentsService, ConsentsServiceMock, HttpTestingController],
      (service: ConsentsService, mock: ConsentsServiceMock, httpMock: HttpTestingController) => {
        service.createNewConsent(mock.consent).subscribe();

        const req: TestRequest = httpMock.expectOne((request: HttpRequest<any>) => {
          return request.url === `${environment.apiUrl}/consents` && request.method === 'POST';
        });
        expect(req.request.responseType).toEqual('json');

        req.flush({});
        httpMock.verify();
      }));
  });

  describe('removeConsent()', () => {
    it('should remove consent', inject([ConsentsService, ConsentsServiceMock, HttpTestingController],
      (service: ConsentsService, mock: ConsentsServiceMock, httpMock: HttpTestingController) => {
        service.removeConsent(mock.consent.id).subscribe();

        const req: TestRequest = httpMock.expectOne((request: HttpRequest<any>) => {
          return request.url === `${environment.apiUrl}/consents/${mock.consent.id}` && request.method === 'DELETE';
        });
        expect(req.request.responseType).toEqual('json');

        req.flush({});
        httpMock.verify();
      }));
  });
});
