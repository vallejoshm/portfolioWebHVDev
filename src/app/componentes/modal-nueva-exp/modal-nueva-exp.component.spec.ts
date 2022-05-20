import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaExpComponent } from './modal-nueva-exp.component';

describe('ModalNuevaExpComponent', () => {
  let component: ModalNuevaExpComponent;
  let fixture: ComponentFixture<ModalNuevaExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevaExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevaExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
