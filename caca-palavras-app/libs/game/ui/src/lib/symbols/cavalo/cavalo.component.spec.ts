import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavaloComponent } from './cavalo.component';

describe('CavaloComponent', () => {
  let component: CavaloComponent;
  let fixture: ComponentFixture<CavaloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CavaloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CavaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
