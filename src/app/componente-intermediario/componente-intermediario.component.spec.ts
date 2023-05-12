import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteIntermediarioComponent } from './componente-intermediario.component';
import { ExemploService } from '../services/exemplo.service';

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

  it('should create', () => {
    expect(component).toBeTruthy();
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
