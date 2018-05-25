import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavetreesComponent } from './savetrees.component';

describe('SavetreesComponent', () => {
  let component: SavetreesComponent;
  let fixture: ComponentFixture<SavetreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavetreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavetreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
