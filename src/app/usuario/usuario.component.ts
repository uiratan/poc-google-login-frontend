import { Component, inject } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {
  private usuarioService = inject(UsuarioService);
  usuario?: any;

  ngOnInit(): void {
    this.usuarioService.getMe().subscribe({
      next: user => (this.usuario = user),
      error: err => console.error('Erro ao carregar usuário:', err)
    });
  }

  logout() {
    sessionStorage.removeItem('jwt');
    window.location.href = '/';
  }
}
