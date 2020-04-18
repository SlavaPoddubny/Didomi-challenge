import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { configureTestSuite } from 'ng-bullet';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatListModule,
        MatDividerModule
      ],
      declarations: [
        MainComponent
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
