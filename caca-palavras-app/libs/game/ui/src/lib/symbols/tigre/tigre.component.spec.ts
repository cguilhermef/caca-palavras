import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TigreComponent } from './tigre.component';

describe('TigreComponent', () => {
  let component: TigreComponent;
  let fixture: ComponentFixture<TigreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TigreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TigreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
