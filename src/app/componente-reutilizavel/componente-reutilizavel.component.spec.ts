import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteReutilizavelComponent } from './componente-reutilizavel.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../_stubs/activated-route.stub';
import { ExemploService } from '../services/exemplo.service';
import { By } from '@angular/platform-browser';
import { TipoEnum } from '../enums/tipos.enum';
import { of } from 'rxjs';
import { InformacoesExemplo } from '../models/informacoes-exemplo.model';

describe('ComponenteReutilizavelComponent', () => {
  let component: ComponenteReutilizavelComponent;
  let fixture: ComponentFixture<ComponenteReutilizavelComponent>;
  let exemploService: ExemploService;

  const activatedRouteStub = new ActivatedRouteStub();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteReutilizavelComponent],
      providers: [
        ExemploService,
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        }
      ]
    });

    fixture = TestBed.createComponent(ComponenteReutilizavelComponent);
    component = fixture.componentInstance;

    exemploService = TestBed.inject(ExemploService);

    fixture.detectChanges();
  });

  describe.each([
    {
      descricao: 'deve exibir título se possuir parametro de rota válido',
      parametroDaRota: true,
      resultadoExibicaoEsperado: true,
      resultadoTipoElemento: true
    },
    {
      descricao: 'não deve exibir título se possuir parametro de rota inválido',
      parametroDaRota: false,
      resultadoExibicaoEsperado: false,
      resultadoTipoElemento: false
    }
  ])('cenários de validação de exibição do título', (theory) => {
    it(`${theory.descricao}`, () => {
      activatedRouteStub.setData({ exibirTitulo: theory.parametroDaRota });

      component.deveExibirTitulo();
      fixture.detectChanges();

      const elemento = fixture.debugElement.query(By.css('#titulo')) ? true : false;

      expect(component.exibirTitulo).toBe(theory.resultadoExibicaoEsperado);
      expect(elemento).toBe(theory.resultadoTipoElemento);
    });
  });

  describe.each([
    {
      descricao: 'deve exibir botão se tipo for A',
      modelo: { tipo: TipoEnum.TipoA },
      resultadoExibicaoEsperado: true,
      resultadoTipoElemento: true
    },
    {
      descricao: 'deve exibir botão se tipo for B',
      modelo: { tipo: TipoEnum.TipoB },
      resultadoExibicaoEsperado: true,
      resultadoTipoElemento: true
    },
    {
      descricao: 'deve exibir botão se tipo for C',
      modelo: { tipo: TipoEnum.TipoC },
      resultadoExibicaoEsperado: true,
      resultadoTipoElemento: true
    },
    {
      descricao: 'deve exibir botão se tipo for D',
      modelo: { tipo: TipoEnum.TipoD },
      resultadoExibicaoEsperado: false,
      resultadoTipoElemento: false
    },
    {
      descricao: 'deve exibir botão se tipo for E',
      modelo: { tipo: TipoEnum.TipoE },
      resultadoExibicaoEsperado: false,
      resultadoTipoElemento: false
    }
  ])('cenários de validação de exibição do botão', (theory) => {
    it(`${theory.descricao}`, () => {
      jest.spyOn(exemploService, 'obterPorId').mockReturnValue(of(theory.modelo as InformacoesExemplo));

      component.carregarInformacoes();
      fixture.detectChanges();

      const elemento = fixture.debugElement.query(By.css('#btn-teste')) ? true : false;

      expect(exemploService.obterPorId).toHaveBeenCalled();
      expect(component.exibirBotao).toBe(theory.resultadoExibicaoEsperado);
      expect(elemento).toBe(theory.resultadoTipoElemento);
    });
  });
});
