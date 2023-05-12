/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { ClasseExemplo } from '../models/class-exemplo.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class ExemploService {

  salvar(dados: ClasseExemplo): Observable<void> {
    return of(void 0);
  }

  obter(id: number): Observable<ClasseExemplo> {
    return of(new ClasseExemplo());
  }
}
