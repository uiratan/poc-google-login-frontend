import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('jwt');

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next(cloned);
  }

  return next(req);
};
