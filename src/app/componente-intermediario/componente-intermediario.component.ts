import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'projeto-angular-jest2-componente-intermediario',
  templateUrl: './componente-intermediario.component.html',
  styleUrls: ['./componente-intermediario.component.scss'],
})
export class ComponenteIntermediarioComponent implements OnInit {
  form!: FormGroup;
  habilitarCampoCustomizado = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      customizado: ['', [Validators.required]],
    });
  }

  salvar() {
    if (!this.form.valid) {
      return;
    }
  }

  tratarCampoCustomizado() {
    console.log('catchau');
  }
}
