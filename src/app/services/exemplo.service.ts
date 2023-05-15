/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { ClasseExemplo } from '../models/class-exemplo.model';
import { Observable, of } from 'rxjs';
import { InformacoesExemplo } from '../models/informacoes-exemplo.model';
import { TipoEnum } from '../enums/tipos.enum';

@Injectable()
export class ExemploService {

  salvar(dados: ClasseExemplo): Observable<void> {
    return of(void 0);
  }

  obterPorId(id: number): Observable<InformacoesExemplo> {
    const info = new InformacoesExemplo();
    info.id = 1;
    info.tipo = TipoEnum.TipoB;

    return of(info);
  }
}
