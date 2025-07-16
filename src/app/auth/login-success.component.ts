import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login-success',
  imports: [CommonModule],
  template: `<p>Redirecionando...</p>`
})
export class LoginSuccessComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (token) {
      console.log(token);
      sessionStorage.setItem('jwt', token);
      this.router.navigate(['/usuario']);
    }
  }
}
