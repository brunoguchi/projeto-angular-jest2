import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ComponenteUmComponent } from './componente-um/componente-um.component';
import { ComponenteDoisComponent } from './componente-dois/componente-dois.component';
import { ComponenteBasicoComponent } from './componente-basico/componente-basico.component';
import { ComponenteIntermediarioComponent } from './componente-intermediario/componente-intermediario.component';

export const appRoutes: Route[] = [
    { path: '', component: AppComponent },
    { path: 'basico', component: ComponenteBasicoComponent },
    { path: 'medio', component: ComponenteIntermediarioComponent },
    { path: 'rota1', component: ComponenteUmComponent },
    { path: 'rota2', component: ComponenteDoisComponent },
];
