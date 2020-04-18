import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

// dependencies
import * as fromSpinnerStore from '@share/modules/spinner/store';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  countRequests = 0;

  constructor(private spinnerStore: Store<fromSpinnerStore.SpinnerModuleStore>) {}

  // handles all requests and show spinner if at least one request still in process
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    this.countRequests++;

    if (this.countRequests === 1) {
      this.spinnerStore.dispatch(new fromSpinnerStore.ShowOnModuleLoading());
    }

    const clonedRequest: HttpRequest<any> = request.clone();

    return next.handle(clonedRequest)
      .pipe(
        finalize(() => {
          this.countRequests--;

          if (this.countRequests === 0) {
            this.spinnerStore.dispatch(new fromSpinnerStore.HideAfterModuleLoaded());
          }
        }
      ));
  }
}
