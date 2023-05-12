import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'projeto-angular-jest2-componente-basico',
  templateUrl: './componente-basico.component.html',
  styleUrls: ['./componente-basico.component.scss'],
})
export class ComponenteBasicoComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  get IdElement() { return this.form.get('id'); }

  criarForm() {
    this.form = this.fb.group({
      id: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
  }

  salvar() {
    if (!this.form.valid) {
      this.validarTodosCampos(this.form);
      return;
    }
  }

  limparCampos() {
    Object.keys(this.form.controls).forEach(field => {
      const control = this.form.get(field);

      if (control instanceof FormControl) {
        control.setValue('');
      }
    });
  }

  validarTodosCampos(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty();
        control.markAsTouched({ onlySelf: true });
      }
    });
  }
}
