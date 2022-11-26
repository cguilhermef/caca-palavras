import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragaoComponent } from './dragao.component';

describe('DragaoComponent', () => {
  let component: DragaoComponent;
  let fixture: ComponentFixture<DragaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DragaoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DragaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
