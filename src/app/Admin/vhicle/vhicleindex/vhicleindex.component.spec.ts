import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhicleindexComponent } from './vhicleindex.component';

describe('VhicleindexComponent', () => {
  let component: VhicleindexComponent;
  let fixture: ComponentFixture<VhicleindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhicleindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhicleindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
