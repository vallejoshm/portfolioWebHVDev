import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaEduComponent } from './modal-nueva-edu.component';

describe('ModalNuevaEduComponent', () => {
  let component: ModalNuevaEduComponent;
  let fixture: ComponentFixture<ModalNuevaEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevaEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevaEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
