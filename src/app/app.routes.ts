import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login.component';
import { LoginSuccessComponent } from './auth/login-success.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login/success', component: LoginSuccessComponent },
  { path: 'usuario', component: UsuarioComponent, canActivate: [authGuard] },
];
