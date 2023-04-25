import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'projeto-angular-jest2-componente-reutilizavel',
  templateUrl: './componente-reutilizavel.component.html',
  styleUrls: ['./componente-reutilizavel.component.scss'],
})
export class ComponenteReutilizavelComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute)
  }
}
