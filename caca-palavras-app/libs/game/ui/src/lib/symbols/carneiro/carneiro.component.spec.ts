import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarneiroComponent } from './carneiro.component';

describe('CarneiroComponent', () => {
  let component: CarneiroComponent;
  let fixture: ComponentFixture<CarneiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarneiroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarneiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
