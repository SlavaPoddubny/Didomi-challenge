import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ConsentsComponent } from './containers/consents.component';

const routes: Route[] = [
  {
    path: '',
    component: ConsentsComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentsRoutingModule {}
