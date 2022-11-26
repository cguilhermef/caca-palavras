import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoelhoComponent } from './coelho.component';

describe('CoelhoComponent', () => {
  let component: CoelhoComponent;
  let fixture: ComponentFixture<CoelhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoelhoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoelhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
