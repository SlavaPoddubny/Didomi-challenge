import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { SpinnerComponent } from './containers/spinner.component';

import { reducers } from '@share/modules/spinner/store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('spinner', reducers)
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerModule { }
