import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhicleviewComponent } from './vhicleview.component';

describe('VhicleviewComponent', () => {
  let component: VhicleviewComponent;
  let fixture: ComponentFixture<VhicleviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhicleviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhicleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
