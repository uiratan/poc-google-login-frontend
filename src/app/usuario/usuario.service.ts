import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  private http = inject(HttpClient);

  getMe(): Observable<any> {
    // return this.http.get<Usuario>('http://localhost:8080/api/usuarios/me');
    return this.http.get<any>('http://localhost:8080/api/usuarios/me').pipe(catchError(this.handleError));
  }

  protected handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro do cliente: ${error.error.message}`;
    } else {
      errorMessage = `Erro do servidor: Código ${error.status}, Mensagem: ${error.message}`;
      if (error.error?.message) errorMessage += `, Detalhe: ${error.error.message}`;
    }
    return throwError(() => error);
  }
}
