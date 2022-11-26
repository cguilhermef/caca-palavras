import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpenteComponent } from './serpente.component';

describe('SerpenteComponent', () => {
  let component: SerpenteComponent;
  let fixture: ComponentFixture<SerpenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SerpenteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SerpenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
