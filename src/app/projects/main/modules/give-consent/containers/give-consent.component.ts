import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn } from '@angular/forms';

import { Store } from '@ngrx/store';
import { values } from 'lodash-es';

import { ConsentsGivenForOptions } from '@core/enums/enums';

// store
import * as fromConsentsStore from '@core/store';

@Component({
  selector: 'app-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.scss'],
})
export class GiveConsentComponent implements OnInit {
  consentForm: FormGroup;

  constructor(private consentsStore: Store<fromConsentsStore.ConsentsModuleStore>,
              private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  /**
   * Send call using store to save consent
   */
  giveConsent(): void {
    if (this.consentForm.valid) {
      this.consentsStore.dispatch(new fromConsentsStore.CreateNewConsent(this.consentForm.value));
    }
  }

  /**
   * Initiate/create reactive form to collect user data
   */
  private initForm(): void {
    this.consentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      consentsGivenFor: this.fb.array(values(ConsentsGivenForOptions).map(item => this.fb.group({
        label: item,
        checked: false
      })), this.minCheckboxesSelectedValidator(1))
    });
  }

  /**
   * Validation Fn to check if at least minimum number of checkboxes is checked
   * @param minNumber minimum amount of checkboxes needed to be checked
   */
  private minCheckboxesSelectedValidator(minNumber = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value.checked)
        .reduce((prev, next) => next ? prev + next : prev, 0);

      return totalSelected >= minNumber ? null : { required: true };
    };

    return validator;
  }
}
