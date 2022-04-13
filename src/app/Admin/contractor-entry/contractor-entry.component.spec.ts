import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorEntryComponent } from './contractor-entry.component';

describe('ContractorEntryComponent', () => {
  let component: ContractorEntryComponent;
  let fixture: ComponentFixture<ContractorEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
