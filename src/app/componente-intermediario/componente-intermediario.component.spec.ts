import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteIntermediarioComponent } from './componente-intermediario.component';
import { ExemploService } from '../services/exemplo.service';
import { By } from '@angular/platform-browser';

describe('ComponenteIntermediarioComponent', () => {
  let component: ComponenteIntermediarioComponent;
  let fixture: ComponentFixture<ComponenteIntermediarioComponent>;
  let exemploService: ExemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteIntermediarioComponent],
      providers: [ExemploService]
    });

    fixture = TestBed.createComponent(ComponenteIntermediarioComponent);
    component = fixture.componentInstance;

    exemploService = TestBed.inject(ExemploService);
    jest.spyOn(exemploService, 'salvar');

    fixture.detectChanges();
  });

  it('quando possuir permissão, deve exibir campo "customizado"', () => {
    component.habilitarCampoCustomizado = true;

    const customizado = fixture.debugElement.query(By.css('#campo-customizado'));

    expect(customizado).not.toBeNull();
  });

  it('quando não possuir permissão, deve ocultar campo "customizado"', () => {
    component.habilitarCampoCustomizado = false;

    const customizado = fixture.debugElement.query(By.css('#campo-customizado'));

    expect(customizado).not.toBeNull();
  });

  describe('quando formulário estiver válido', () => {
    beforeEach(() => {
      component.form.controls['id'].setValue(123);
      component.form.controls['descricao'].setValue('alguma descrição');
      component.form.controls['customizado'].setValue('algum valor qualquer');
    });

    it('deve invocar método de criação de modelo', () => {
      const functionMocked = jest.spyOn(component, 'criarModeloParaSalvar');

      component.salvar();

      expect(functionMocked).toHaveBeenCalled();
    });

    it('deve invocar método do serviço para salvar', () => {
      const modeloParaSalvar = component.criarModeloParaSalvar();

      component.salvar();

      expect(exemploService.salvar).toHaveBeenCalledWith(modeloParaSalvar);
    });
  });
});
