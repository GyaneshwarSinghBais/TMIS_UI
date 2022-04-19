import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhiclecreateComponent } from './vhiclecreate.component';

describe('VhiclecreateComponent', () => {
  let component: VhiclecreateComponent;
  let fixture: ComponentFixture<VhiclecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhiclecreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhiclecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
