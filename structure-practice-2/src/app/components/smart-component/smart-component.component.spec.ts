import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartComponentComponent } from './smart-component.component';

describe('SmartComponentComponent', () => {
  let component: SmartComponentComponent;
  let fixture: ComponentFixture<SmartComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartComponentComponent]
    });
    fixture = TestBed.createComponent(SmartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
