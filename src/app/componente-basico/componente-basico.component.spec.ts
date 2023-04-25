import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteBasicoComponent } from './componente-basico.component';

describe('ComponenteBasicoComponent', () => {
  let component: ComponenteBasicoComponent;
  let fixture: ComponentFixture<ComponenteBasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteBasicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('formulário deve ser inválido caso não esteja preenchido', () => {
    expect(component.form.invalid).toBeTruthy();
  });

  it('formulário deve ser válido caso esteja devidamente preenchido', () => {
    component.form.controls['id'].setValue(12345);
    component.form.controls['descricao'].setValue('valor teste');

    expect(component.form.invalid).toBeFalsy();
  });

  it('formulário deve ser resetado ao invocar a limpeza de campos', () => {
    component.form.controls['id'].setValue(12345);
    component.form.controls['descricao'].setValue('valor teste');

    component.limparCampos();

    expect(component.form.valid).toBeFalsy();
  });
});
