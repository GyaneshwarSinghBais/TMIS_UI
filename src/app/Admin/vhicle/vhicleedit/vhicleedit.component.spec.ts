import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VhicleeditComponent } from './vhicleedit.component';

describe('VhicleeditComponent', () => {
  let component: VhicleeditComponent;
  let fixture: ComponentFixture<VhicleeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VhicleeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VhicleeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
