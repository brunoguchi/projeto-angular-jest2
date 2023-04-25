import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteReutilizavelComponent } from './componente-reutilizavel.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../_stubs/activated-route.stub';

describe('ComponenteReutilizavelComponent', () => {
  let component: ComponenteReutilizavelComponent;
  let fixture: ComponentFixture<ComponenteReutilizavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteReutilizavelComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteStub(),
        }
      ]
    });

    fixture = TestBed.createComponent(ComponenteReutilizavelComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
