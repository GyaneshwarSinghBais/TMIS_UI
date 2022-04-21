import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorviewComponent } from './contractorview.component';

describe('ContractorviewComponent', () => {
  let component: ContractorviewComponent;
  let fixture: ComponentFixture<ContractorviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
