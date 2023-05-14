import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevoProyectoComponent } from './modal-nuevo-proyecto.component';

describe('ModalNuevoProyectoComponent', () => {
  let component: ModalNuevoProyectoComponent;
  let fixture: ComponentFixture<ModalNuevoProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevoProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
