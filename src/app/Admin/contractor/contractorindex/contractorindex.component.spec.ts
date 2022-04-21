import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorindexComponent } from './contractorindex.component';

describe('ContractorindexComponent', () => {
  let component: ContractorindexComponent;
  let fixture: ComponentFixture<ContractorindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractorindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
