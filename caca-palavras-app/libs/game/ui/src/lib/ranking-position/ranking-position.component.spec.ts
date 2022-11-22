import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPositionComponent } from './ranking-position.component';

describe('RankingPositionComponent', () => {
  let component: RankingPositionComponent;
  let fixture: ComponentFixture<RankingPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingPositionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RankingPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
