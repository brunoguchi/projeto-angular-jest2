import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponenteReutilizavelComponent } from './componente-reutilizavel/componente-reutilizavel.component';
import { ComponenteUmComponent } from './componente-um/componente-um.component';
import { ComponenteDoisComponent } from './componente-dois/componente-dois.component';
import { ComponenteBasicoComponent } from './componente-basico/componente-basico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponenteIntermediarioComponent } from './componente-intermediario/componente-intermediario.component';
import { ExemploService } from './services/exemplo.service';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    ComponenteReutilizavelComponent,
    ComponenteUmComponent,
    ComponenteDoisComponent,
    ComponenteBasicoComponent,
    ComponenteIntermediarioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ReactiveFormsModule,
  ],
  providers: [
    ExemploService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
