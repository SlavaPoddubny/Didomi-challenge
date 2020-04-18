import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { configureTestSuite } from 'ng-bullet';

import { ConsentsService } from '@core/services/consents.service';
import { ConsentsServiceMock } from '@core/services/consents.service.mock';
import { MockStore } from '@share/testing/mock-store';
import * as fromConsentsStore from '@core/store';
import { ConsentReadMock } from '@share/mocks/consent.mock';
import { MockPrivate } from '@share/mocks/mock-private.type';

import { ToolbarModule } from '@share/modules/toolbar/toolbar.module';

import { ConsentsComponent } from './consents.component';

const pageIndex = 1;
const pageSize = 2;
const pageEvent = {
  pageIndex: 1
} as PageEvent;
const paginator = {
  pageIndex: 0
};

describe('ConsentsComponent', () => {
  let component: ConsentsComponent;
  let fixture: ComponentFixture<ConsentsComponent>;
  let storeDispatchSpy: jasmine.Spy;
  let consentsStore: Store<fromConsentsStore.ConsentsModuleStore>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FlexLayoutModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        ToolbarModule
      ],
      declarations: [
        ConsentsComponent
      ],
      providers: [
        { provide: ConsentsService, useValue: new ConsentsServiceMock() },
        { provide: Store, useClass: MockStore },
        { provide: MatPaginator, useValue: {
            pageIndex: 0
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentsComponent);
    component = fixture.componentInstance;
    component.consents$ = of([ConsentReadMock]);
    component.paginator = paginator as MatPaginator;
    consentsStore = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should call loadConsents', () => {
      spyOn((component as MockPrivate), 'loadConsents');

      component.ngOnInit();

      expect((component as MockPrivate).loadConsents).toHaveBeenCalled();
    });

    it('should dispatch LoadConsents', () => {
      storeDispatchSpy = spyOn(consentsStore, 'dispatch');

      component.ngOnInit();

      expect(storeDispatchSpy).toHaveBeenCalledWith(
        new fromConsentsStore.LoadConsents({ pageIndex, pageSize })
      );
    });

    it('should call initializeData on consents$ subscribe', () => {
      spyOn((component as MockPrivate), 'initializeData');

      component.ngOnInit();

      component.consents$
        .subscribe(data => {
          expect((component as MockPrivate).initializeData).toHaveBeenCalledWith(data);
        });
    });
  });

  describe('#onPageChange', () => {
    it('should go to appropriate page using arrows', () => {
      const onPageChange = spyOn(component, 'onPageChange');

      component.onPageChange(pageEvent);

      expect(onPageChange).toHaveBeenCalledWith(pageEvent);
    });

    it('should call loadConsents for appropriate page using arrows', () => {
      spyOn((component as MockPrivate), 'loadConsents');

      component.onPageChange(pageEvent);

      expect((component as MockPrivate).loadConsents).toHaveBeenCalledWith(pageEvent.pageIndex + 1);
    });
  });

  describe('#goToPage', () => {
    it('should go to appropriate page', () => {
      const goToPage = spyOn(component, 'goToPage');

      component.goToPage(pageIndex);

      expect(goToPage).toHaveBeenCalledWith(pageIndex);
    });

    it('should call loadConsents for appropriate page', () => {
      spyOn((component as MockPrivate), 'loadConsents');

      component.goToPage(pageIndex + 1);

      expect((component as MockPrivate).loadConsents).toHaveBeenCalledWith(pageIndex + 2);
    });
  });

  describe('#removeOffice', () => {
    it('should dispatch RemoveOffice', () => {
      storeDispatchSpy = spyOn(consentsStore, 'dispatch');

      component.removeConsent(ConsentReadMock.id);

      expect(storeDispatchSpy).toHaveBeenCalledWith(
        new fromConsentsStore.RemoveConsent({ id: ConsentReadMock.id, pageSize })
      );
    });
  });
});
