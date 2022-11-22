import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseSymbolComponent } from './chinese-symbol.component';

describe('ChineseSymbolComponent', () => {
  let component: ChineseSymbolComponent;
  let fixture: ComponentFixture<ChineseSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChineseSymbolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChineseSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
