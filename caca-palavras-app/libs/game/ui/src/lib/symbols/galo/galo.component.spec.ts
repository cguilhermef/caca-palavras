import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaloComponent } from './galo.component';

describe('GaloComponent', () => {
  let component: GaloComponent;
  let fixture: ComponentFixture<GaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
