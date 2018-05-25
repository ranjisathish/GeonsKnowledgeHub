import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamecontrollerComponent } from './gamecontroller.component';

describe('GamecontrollerComponent', () => {
  let component: GamecontrollerComponent;
  let fixture: ComponentFixture<GamecontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamecontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as title 'game'`, async(() => {
    
   // const fixture1 = TestBed.createComponent(GamecontrollerComponent);
    //fixture1.detectChanges();
    //const compiled = fixture1.debugElement.nativeElement;
   // expect(compiled.querySelector('h1').textContent).toContain('Game');
   expect(component.title).toContain('Game');
  }));
});
