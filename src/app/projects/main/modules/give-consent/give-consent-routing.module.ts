import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { GiveConsentComponent } from './containers/give-consent.component';

const routes: Route[] = [
  {
    path: '',
    component: GiveConsentComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveConsentRoutingModule {}
