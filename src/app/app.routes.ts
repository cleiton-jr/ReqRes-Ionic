import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'lista-usuarios',
    pathMatch: 'full',
  },
  {
    path: 'lista-usuarios',
    loadComponent: () => import('./lista-usuarios/lista-usuarios.page').then( m => m.ListaUsuariosPage)
  },
  {
    path: 'criar-usuario',
    loadComponent: () => import('./criar-usuario/criar-usuario.page').then( m => m.CriarUsuarioPage)
  },
  {
    path: 'editar-usuario/:id',
    loadComponent: () => import('./editar-usuario/editar-usuario.page').then( m => m.EditarUsuarioPage)
  },

];
