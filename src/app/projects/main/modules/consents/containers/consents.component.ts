import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Store, select } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { range } from 'lodash-es';

import { Unsubscriber } from '@core/classes/unsubscriber';

// models
import { Consent } from '@share/models/consent.model';

// store
import * as fromConsentsStore from '@core/store';

@Component({
  selector: 'app-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss'],
})
export class ConsentsComponent extends Unsubscriber implements OnInit {
  consents$ = this.consentsStore.pipe<Consent[]>(select(fromConsentsStore.getConsents));
  consentsTotalCount$ = this.consentsStore.pipe<number>(select(fromConsentsStore.getConsentsTotalCount));
  isConsentsLoading$ = this.consentsStore.pipe<boolean>(select(fromConsentsStore.getIsConsentsLoading));

  displayedColumns: string[] = ['name', 'email', 'consentsGivenFor', 'action'];
  dataSource: MatTableDataSource<Consent>;
  pageSize = 2;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Get list of available pages based on data length
   */
  get pages() {
    return this.paginator ? range(this.paginator.getNumberOfPages()) : [];
  }

  constructor(private consentsStore: Store<fromConsentsStore.ConsentsModuleStore>) {
    super();
  }

  ngOnInit() {
    this.loadConsents();

    /**
     * Subscription for data initializing right after data appeared in store
     */
    this.consents$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Consent[]) => {
        this.initializeData(data);
      });
  }

  /**
   * Change page of a table using arrows
   * @param event Mat Paginator entity with data about page
   */
  onPageChange(event: PageEvent): void {
    this.paginator.pageIndex = event.pageIndex;
    this.loadConsents(event.pageIndex + 1);
  }

  /**
   * Change page of a table using page numbers
   * @param pageIndex page index
   */
  goToPage(pageIndex: number): void {
    if (this.paginator && this.paginator.pageIndex !== pageIndex) {
      this.paginator.pageIndex = pageIndex;
      this.loadConsents(pageIndex + 1);
    }
  }

  /**
   * Remove item from list
   * there inconsistency between paginator page index and page index needed for api call
   * @param id unique item id
   */
  removeConsent(id: number): void {
    const updatedPageIndex = this.paginator.getNumberOfPages() - 1;
    this.paginator.pageIndex = this.dataSource.data.length === 1 ? updatedPageIndex - 1 : updatedPageIndex;
    this.consentsStore.dispatch(new fromConsentsStore.RemoveConsent({
      id, pageIndex: this.paginator.pageIndex + 1, pageSize: this.pageSize
    }));
  }

  /**
   * Load main data based on page index and page size
   * @param pageIndex page index
   */
  private loadConsents(pageIndex = 1): void {
    this.consentsStore.dispatch(new fromConsentsStore.LoadConsents({ pageIndex, pageSize: this.pageSize }));
  }

  /**
   * Put loaded data to Mat Table
   * @param data list of items
   */
  private initializeData(data: Consent[]): void {
    this.dataSource = new MatTableDataSource(data);
  }
}
