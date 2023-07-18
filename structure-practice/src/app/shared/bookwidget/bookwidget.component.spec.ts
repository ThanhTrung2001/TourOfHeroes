import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookwidgetComponent } from './bookwidget.component';

describe('BookwidgetComponent', () => {
  let component: BookwidgetComponent;
  let fixture: ComponentFixture<BookwidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookwidgetComponent]
    });
    fixture = TestBed.createComponent(BookwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
