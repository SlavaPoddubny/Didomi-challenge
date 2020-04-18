import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './containers/main.component';

@NgModule({
  imports: [
    // core
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    // material
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    // data
    MainRoutingModule

  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule {}
