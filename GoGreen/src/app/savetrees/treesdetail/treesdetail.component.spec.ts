import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesdetailComponent } from './treesdetail.component';

describe('TreesdetailComponent', () => {
  let component: TreesdetailComponent;
  let fixture: ComponentFixture<TreesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
