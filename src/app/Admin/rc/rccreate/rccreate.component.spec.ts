import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RccreateComponent } from './rccreate.component';

describe('RccreateComponent', () => {
  let component: RccreateComponent;
  let fixture: ComponentFixture<RccreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RccreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RccreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
