import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule],
  template: `<button (click)="login()">Login com Google</button>`
})
export class LoginComponent {
  login() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }
}
