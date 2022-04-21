import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractoreditComponent } from './contractoredit.component';

describe('ContractoreditComponent', () => {
  let component: ContractoreditComponent;
  let fixture: ComponentFixture<ContractoreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractoreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
