import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const username = 'coalition';
  const password = 'skills-test';
  const encodedCredentials = btoa(`${username}:${password}`);

  const modifiedRequest = req.clone({
    setHeaders: {
      Authorization: `Basic ${encodedCredentials}`,
    },
  });

  return next(modifiedRequest);
};



