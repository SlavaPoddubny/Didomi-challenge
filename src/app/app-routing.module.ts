import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';


const routes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./projects/main/main.module').then(m => m.MainModule),
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
