import { Routes } from '@angular/router';
import { TrazabilidadComponent } from './Components/trazabilidad/trazabilidad.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
    {
      path: 'trazabilidad',  // La URL que activará esta ruta
      component: TrazabilidadComponent,  // El componente que se renderizará
    },
    {
        path: '',
        component:HomeComponent
    }
  ];