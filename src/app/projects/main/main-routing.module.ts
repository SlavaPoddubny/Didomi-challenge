import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { MainComponent } from './containers/main.component';

const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'consents',
        loadChildren: () =>
          import('./modules/consents/consents.module').then(m => m.ConsentsModule)
      },
      {
        path: 'give-consent',
        loadChildren: () =>
          import('./modules/give-consent/give-consent.module').then(m => m.GiveConsentModule)
      },
      { path: '', redirectTo: 'consents', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
