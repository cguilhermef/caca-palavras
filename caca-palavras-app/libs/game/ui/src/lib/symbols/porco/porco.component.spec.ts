import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorcoComponent } from './porco.component';

describe('PorcoComponent', () => {
  let component: PorcoComponent;
  let fixture: ComponentFixture<PorcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorcoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PorcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
