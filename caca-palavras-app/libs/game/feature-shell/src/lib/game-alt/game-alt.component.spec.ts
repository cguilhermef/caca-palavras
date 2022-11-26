import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAltComponent } from './game-alt.component';

describe('GameAltComponent', () => {
  let component: GameAltComponent;
  let fixture: ComponentFixture<GameAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameAltComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GameAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
