import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteDoisComponent } from './componente-dois.component';

describe('ComponenteDoisComponent', () => {
  let component: ComponenteDoisComponent;
  let fixture: ComponentFixture<ComponenteDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteDoisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
