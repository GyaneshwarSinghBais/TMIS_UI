import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RceditComponent } from './rcedit.component';

describe('RceditComponent', () => {
  let component: RceditComponent;
  let fixture: ComponentFixture<RceditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RceditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RceditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
