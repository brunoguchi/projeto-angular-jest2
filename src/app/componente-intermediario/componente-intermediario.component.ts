import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClasseExemplo } from '../models/class-exemplo.model';
import { ExemploService } from '../services/exemplo.service';

@Component({
  selector: 'projeto-angular-jest2-componente-intermediario',
  templateUrl: './componente-intermediario.component.html',
  styleUrls: ['./componente-intermediario.component.scss'],
})
export class ComponenteIntermediarioComponent implements OnInit {
  form!: FormGroup;
  habilitarCampoCustomizado = true;

  constructor(private fb: FormBuilder,
    private exemploService: ExemploService) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      customizado: [''],
    });
  }

  salvar() {
    if (!this.form.valid) {
      console.log('formulário inválido');
      return;
    }

    const modeloCriado = this.criarModeloParaSalvar();

    this.exemploService.salvar(modeloCriado).subscribe(() => {
      console.log('dados salvos!', modeloCriado);
    });
  }

  criarModeloParaSalvar(): ClasseExemplo {
    const modelo = new ClasseExemplo();
    modelo.id = this.form.get('id')?.value;
    modelo.descricao = this.form.get('descricao')?.value;
    modelo.customizado = this.form.get('customizado')?.value;

    return modelo;
  }

  tratarCampoCustomizado() {
    this.habilitarCampoCustomizado = !this.habilitarCampoCustomizado;
    this.form.get('customizado')?.setValue('');
  }
}
