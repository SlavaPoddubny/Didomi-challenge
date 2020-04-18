import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '@core/store';

import { ConsentsService } from '@core/services/consents.service';

import { ToolbarModule } from '@share/modules/toolbar/toolbar.module';

import { ConsentsRoutingModule } from './consents-routing.module';

import { ConsentsComponent } from './containers/consents.component';

@NgModule({
  imports: [
    // core
    CommonModule,
    FlexLayoutModule,
    // material
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    // share
    ToolbarModule,
    // data
    ConsentsRoutingModule,
    // store
    EffectsModule.forFeature(effects),
    StoreModule.forFeature('consents', reducers)
  ],
  declarations: [
    ConsentsComponent
  ],
  providers: [
    ConsentsService
  ]
})
export class ConsentsModule {}
