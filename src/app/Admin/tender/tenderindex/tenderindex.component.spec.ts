import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderindexComponent } from './tenderindex.component';

describe('TenderindexComponent', () => {
  let component: TenderindexComponent;
  let fixture: ComponentFixture<TenderindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenderindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
