import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighOrderComponent } from './high-order.component';

describe('HighOrderComponent', () => {
  let component: HighOrderComponent;
  let fixture: ComponentFixture<HighOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighOrderComponent]
    });
    fixture = TestBed.createComponent(HighOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
