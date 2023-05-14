import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNuevaSkillComponent } from './modal-nueva-skill.component';

describe('ModalNuevaSkillComponent', () => {
  let component: ModalNuevaSkillComponent;
  let fixture: ComponentFixture<ModalNuevaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNuevaSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNuevaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
