import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '@core/store';

import { ConsentsService } from '@core/services/consents.service';

import { ToolbarModule } from '@share/modules/toolbar/toolbar.module';

import { GiveConsentRoutingModule } from './give-consent-routing.module';

import { GiveConsentComponent } from './containers/give-consent.component';

@NgModule({
  imports: [
    // core
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    // material
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    // share
    ToolbarModule,
    // data
    GiveConsentRoutingModule,
    // store
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('consents', reducers)
  ],
  declarations: [
    GiveConsentComponent
  ],
  providers: [
    ConsentsService
  ]
})
export class GiveConsentModule {}
