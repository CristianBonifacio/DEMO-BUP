import { Routes } from '@angular/router';
import { TrazabilidadComponent } from './Components/trazabilidad/trazabilidad.component';
import { HomeComponent } from './Components/home/home.component';
import { TarificadorComponent } from './Components/tarificador/tarificador.component';
import { BTComponent } from './Components/bt/bt.component';
import { SearchAudioComponent } from './Components/search-audio/search-audio.component';

export const routes: Routes = [
    {
      path: 'trazabilidad',  // La URL que activará esta ruta
      component: TrazabilidadComponent,  // El componente que se renderizará
    },
    {
        path: '',
        component:HomeComponent
    },
    {
      path:'tarificador',
      component:TarificadorComponent,
    },
    {
      path:'bt',
      component:BTComponent
    },
    {
      path:'search-audio',
      component:SearchAudioComponent
    }
  ];