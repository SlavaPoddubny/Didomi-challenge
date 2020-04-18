import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarComponent } from './containers/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
