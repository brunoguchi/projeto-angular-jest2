import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExemploService } from '../services/exemplo.service';
import { InformacoesExemplo } from '../models/informacoes-exemplo.model';
import { TipoEnum } from '../enums/tipos.enum';

@Component({
  selector: 'projeto-angular-jest2-componente-reutilizavel',
  templateUrl: './componente-reutilizavel.component.html',
  styleUrls: ['./componente-reutilizavel.component.scss'],
})
export class ComponenteReutilizavelComponent implements OnInit {
  exibirTitulo!: boolean;
  modeloExemplo!: InformacoesExemplo;
  exibirBotao!: boolean;
  idQualquer = 123;

  constructor(private activatedRoute: ActivatedRoute,
    private exemploService: ExemploService) { }

  ngOnInit() {
    this.deveExibirTitulo();
    this.carregarInformacoes();
  }

  deveExibirTitulo() {
    let rotaPermiteExibir = false;

    this.activatedRoute.data.subscribe(data => {
      rotaPermiteExibir = Boolean(data['exibirTitulo']);
      this.exibirTitulo = rotaPermiteExibir;
    });
  }

  carregarInformacoes() {
    this.exemploService.obterPorId(this.idQualquer).subscribe(modelo => {
      this.modeloExemplo = modelo;
      this.deveExibirBotao(this.modeloExemplo.tipo);
    });
  }

  deveExibirBotao(tipo: TipoEnum) {
    switch (tipo) {
      case TipoEnum.TipoA:
      case TipoEnum.TipoB:
      case TipoEnum.TipoC:
        this.exibirBotao = true;
        break;
      default:
        this.exibirBotao = false;
        break;
    }
  }
}
