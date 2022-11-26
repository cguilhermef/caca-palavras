import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatoComponent } from './rato.component';

describe('RatoComponent', () => {
  let component: RatoComponent;
  let fixture: ComponentFixture<RatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
