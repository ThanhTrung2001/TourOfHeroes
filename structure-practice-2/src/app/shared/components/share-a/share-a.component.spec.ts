import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareAComponent } from './share-a.component';

describe('ShareAComponent', () => {
  let component: ShareAComponent;
  let fixture: ComponentFixture<ShareAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareAComponent]
    });
    fixture = TestBed.createComponent(ShareAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
