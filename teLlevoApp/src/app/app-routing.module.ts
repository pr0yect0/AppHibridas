import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //se cambia el orden de los path, en este casorestablecer-contrasenia va primero
  {
    path: 'restablecer-contrasenia',
    loadChildren: () => import('./restablecer-contrasenia/restablecer-contrasenia.module').then( m => m.RestablecerContraseniaPageModule)
  },

  {
    path: '',
    redirectTo: 'restablecer-contrasenia',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
