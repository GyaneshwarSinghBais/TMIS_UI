import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWarehouseComponent } from './navbar-warehouse.component';

describe('NavbarWarehouseComponent', () => {
  let component: NavbarWarehouseComponent;
  let fixture: ComponentFixture<NavbarWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarWarehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
