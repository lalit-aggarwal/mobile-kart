import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmobileinformationComponent } from './viewmobileinformation.component';

describe('ViewmobileinformationComponent', () => {
  let component: ViewmobileinformationComponent;
  let fixture: ComponentFixture<ViewmobileinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmobileinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmobileinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
