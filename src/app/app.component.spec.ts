import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import { configureTestSuite } from 'ng-bullet';

import { SpinnerModule } from '@share/modules/spinner/spinner.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SpinnerModule,
        StoreModule.forRoot({}),
      ],
      declarations: [
        AppComponent
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
