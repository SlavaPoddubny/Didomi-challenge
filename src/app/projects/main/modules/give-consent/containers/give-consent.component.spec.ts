import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { configureTestSuite } from 'ng-bullet';

import { ConsentsService } from '@core/services/consents.service';
import { ConsentsServiceMock } from '@core/services/consents.service.mock';
import { MockStore } from '@share/testing/mock-store';
import * as fromConsentsStore from '@core/store';
import { ConsentWriteMock } from '@share/mocks/consent.mock';
import { MockPrivate } from '@share/mocks/mock-private.type';

import { ToolbarModule } from '@share/modules/toolbar/toolbar.module';

import { GiveConsentComponent } from './give-consent.component';

const formBuilder: FormBuilder = new FormBuilder();

describe('GiveConsentComponent', () => {
  let component: GiveConsentComponent;
  let fixture: ComponentFixture<GiveConsentComponent>;
  let storeDispatchSpy: jasmine.Spy;
  let consentsStore: Store<fromConsentsStore.ConsentsModuleStore>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        ToolbarModule
      ],
      declarations: [
        GiveConsentComponent
      ],
      providers: [
        { provide: ConsentsService, useValue: new ConsentsServiceMock() },
        { provide: Store, useClass: MockStore },
        { provide: FormBuilder, useValue: formBuilder }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentComponent);
    component = fixture.componentInstance;
    consentsStore = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should call loadConsents', () => {
      spyOn((component as MockPrivate), 'initForm');

      component.ngOnInit();

      expect((component as MockPrivate).initForm).toHaveBeenCalled();
    });
  });

  describe('#giveConsent', () => {
    beforeEach(() => {
      component.ngOnInit();
      // form valid by default
      component.consentForm.patchValue(ConsentWriteMock);
    });

    it('should @consentForm be invalid if no name in field', () => {
      component.consentForm.get('name').patchValue('');

      component.giveConsent();

      expect(component.consentForm.invalid).toBe(true);
    });

    it('should @consentForm be invalid if no email in field', () => {
      component.consentForm.get('email').patchValue('');

      component.giveConsent();

      expect(component.consentForm.invalid).toBe(true);
    });

    it('should @consentForm be invalid if email not valid', () => {
      component.consentForm.get('email').patchValue('test');

      component.giveConsent();

      expect(component.consentForm.invalid).toBe(true);
    });

    it('should @consentForm be invalid if no checkboxes are checked', () => {
      component.consentForm.get('consentsGivenFor').patchValue([
        {
          label: 'Recieive newsletter',
          checked: false
        },
        {
          label: 'Be shown targeted ads',
          checked: false
        },
        {
          label: 'Contribute to anonymous visit statistics',
          checked: false
        }
      ]);

      component.giveConsent();

      expect(component.consentForm.invalid).toBe(true);
    });

    it('should dispatch CreateNewConsent when @consentForm is valid', () => {
      storeDispatchSpy = spyOn(consentsStore, 'dispatch');

      component.giveConsent();

      expect(storeDispatchSpy).toHaveBeenCalledWith(
        new fromConsentsStore.CreateNewConsent(component.consentForm.value)
      );
    });
  });
});
