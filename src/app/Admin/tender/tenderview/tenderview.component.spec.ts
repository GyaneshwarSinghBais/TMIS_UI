import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderviewComponent } from './tenderview.component';

describe('TenderviewComponent', () => {
  let component: TenderviewComponent;
  let fixture: ComponentFixture<TenderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
