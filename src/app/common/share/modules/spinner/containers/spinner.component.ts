import { Component, OnInit } from '@angular/core';
import { GuardsCheckEnd, NavigationCancel, NavigationEnd, NavigationError, Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { Unsubscriber } from '@core/classes/unsubscriber';

import * as fromSpinnerStore from '@share/modules/spinner/store';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent extends Unsubscriber implements OnInit {
  isVisibleSpinner$ = this.spinnerStore.pipe<boolean>(select(fromSpinnerStore.isVisibleOnModuleLoading));

  constructor(private spinnerStore: Store<fromSpinnerStore.SpinnerModuleStore>,
              private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$)
      )
      .subscribe((event: any): void => {
        if (event instanceof GuardsCheckEnd) {
          if (event.shouldActivate === true ) {
            this.spinnerStore.dispatch(new fromSpinnerStore.ShowOnModuleLoading());
          }
        } else if (event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError) {
          this.spinnerStore.dispatch(new fromSpinnerStore.HideAfterModuleLoaded());
        }
      });
  }
}
