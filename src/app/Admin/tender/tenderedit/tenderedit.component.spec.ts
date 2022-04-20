import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendereditComponent } from './tenderedit.component';

describe('TendereditComponent', () => {
  let component: TendereditComponent;
  let fixture: ComponentFixture<TendereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TendereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
