import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendercreateComponent } from './tendercreate.component';

describe('TendercreateComponent', () => {
  let component: TendercreateComponent;
  let fixture: ComponentFixture<TendercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TendercreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TendercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
