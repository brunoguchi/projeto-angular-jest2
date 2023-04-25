import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteIntermediarioComponent } from './componente-intermediario.component';

describe('ComponenteIntermediarioComponent', () => {
  let component: ComponenteIntermediarioComponent;
  let fixture: ComponentFixture<ComponenteIntermediarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteIntermediarioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteIntermediarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
