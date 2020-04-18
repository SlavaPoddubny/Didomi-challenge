import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

// class helps to easily unsibscribe
export class Unsubscriber implements OnDestroy {
  protected destroy$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  unsubscribeAll(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
