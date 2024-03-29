import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DesktopDevelopmentComponent } from './desktop-development.component';

describe('DesktopDevelopmentComponent', () => {
  let component: DesktopDevelopmentComponent;
  let fixture: ComponentFixture<DesktopDevelopmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
