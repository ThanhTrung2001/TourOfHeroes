import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWidgetComponent } from './book-widget.component';

describe('BookWidgetComponent', () => {
  let component: BookWidgetComponent;
  let fixture: ComponentFixture<BookWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookWidgetComponent]
    });
    fixture = TestBed.createComponent(BookWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
