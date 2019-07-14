import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightedContentComponent } from './hightlighted-content.component';

describe('HightlightedContentComponent', () => {
  let component: HightlightedContentComponent;
  let fixture: ComponentFixture<HightlightedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightlightedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightlightedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
