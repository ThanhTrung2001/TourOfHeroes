import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartComponent } from './smart.component';

describe('SmartComponent', () => {
  let component: SmartComponent;
  let fixture: ComponentFixture<SmartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartComponent]
    });
    fixture = TestBed.createComponent(SmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
