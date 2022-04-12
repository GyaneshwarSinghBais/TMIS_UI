import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVhicleTypeComponent } from './show-vhicle-type.component';

describe('ShowVhicleTypeComponent', () => {
  let component: ShowVhicleTypeComponent;
  let fixture: ComponentFixture<ShowVhicleTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVhicleTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowVhicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
