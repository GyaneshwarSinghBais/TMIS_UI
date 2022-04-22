import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcindexComponent } from './rcindex.component';

describe('RcindexComponent', () => {
  let component: RcindexComponent;
  let fixture: ComponentFixture<RcindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
