import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcviewComponent } from './rcview.component';

describe('RcviewComponent', () => {
  let component: RcviewComponent;
  let fixture: ComponentFixture<RcviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RcviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
