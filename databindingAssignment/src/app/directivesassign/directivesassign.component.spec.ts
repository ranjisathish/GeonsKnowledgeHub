import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesassignComponent } from './directivesassign.component';

describe('DirectivesassignComponent', () => {
  let component: DirectivesassignComponent;
  let fixture: ComponentFixture<DirectivesassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
